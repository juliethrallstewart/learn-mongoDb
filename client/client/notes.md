npx create-next-app
npm install --save next react react-dom
npm install --save isomorphic-unfetch

{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}


npm run dev -- -p 4000

PORT=8000 npm start

mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
npm install --save isomorphic-unfetch
mkdir pages

### AG-GRID

npm install --save ag-grid-community ag-grid-react
npm install --save @zeit/next-css

- import for files using ag-grid
import { AgGridReact } from 'ag-grid-react';

import '../node_modules/ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

- to get rid of the errors with the node_module imports for ag-grid css: 

https://stackoverflow.com/questions/53383925/ag-grid-rendering-in-next-js-pages
https://github.com/zeit/next-plugins/tree/master/packages/next-css


create:
next.config.js
>> 
const withCSS = require('@zeit/next-css')
module.exports = withCSS()

### Db

db.subscribers.insertMany([
  {
    name: 'Bob',
    subscribedToChannel: 'Chicken forever',
    date: Date()
  },
  {
    name: 'Jane',
    subscribedToChannel: 'Pizza forever',
    date: Date()
  },
  {
    name: 'Fred',
    subscribedToChannel: 'Icecream forever',
    date: Date()
  }
])
