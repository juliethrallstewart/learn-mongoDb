const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')


// getting all subscribers with async/await

// router.get('/', async (req, res) => {
//     try {
//         const subscribers = await Subscriber.find()
//         res.json(subscribers)

//     } catch (err) {
//         res.status(500).json({errorMessage: 'err getting subscribers'})
//     }
// })

// getting all subscribers with a promise
router.get('/', (req, res) => {
   Subscriber.find()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(e => {
        res.status(500).json({errorMessage: 'err getting subscribers'})
    })
})

// getting a subscriber
// the subscriber is returned from the middleware function 
// and accessed via ie: res.subscriber.name

router.get('/:id', getSubscriber, (req, res) => {
    // res.send(req.params.id)
    // res.send(res.subscriber.name)
    res.status(200).json(res.subscriber)
    
})

// creating a subscriber

router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name:req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({errorMessage: err.message})
    }
})

//Updating a subscriber - patch instead of put because we only want to update the info that gets passed
//unlike put that updates the entire object

// if req.body.name != null then update the subscriber object returned
//from the middleware 'getSuscriber'
router.patch('/:id', getSubscriber, async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.status(200).json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
    
})

// deleting a subscriber

router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.status(200).json({message: "removed subscriber"})

    } catch (err) {
        res.status(500).json({errorMessage: err.message})

    }
    
})

//middleware
// must return so if the requirement is met we will exit the function

//res.subscriber returns the subscriber to the requesting route
async function getSubscriber(req, res, next) {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id)
        console.log(subscriber)
        if (subscriber === null) {
            return res.status(404).json({message: 'subscriber not found'})
        }
    } catch (err) {
            return res.status(500).json({errorMessage: err.message})
        }

    res.subscriber = subscriber
    next()
}

module.exports = router;
