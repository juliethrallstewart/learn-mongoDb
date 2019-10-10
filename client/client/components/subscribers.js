import React from 'react'

const Subscribers = (props) => {
    return (
        <>
        <p>List of subscribers</p>
           <ul>
                   {props.subscribers.map(subscriber => (
                    <li key={subscriber.id}>
                      <p>{subscriber.name}</p>
                    </li>
                    ))}
                </ul>
        </>
    )

}

export default Subscribers;