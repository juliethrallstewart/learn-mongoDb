import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react';
import '../node_modules/ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

//The three lines above import the AgGridReact component, 
//the grid "structure" stylesheet (ag-grid.css), and one of the 
//available grid themes: (ag-theme-balham.css).



const Grid = (props) => {

    const [columns] = useState({
        columnDefs: [{
            headerName: "Subscribe Date", field: "subscribeDate"
          }, {
            headerName: "Id", field: "_id"
          }, {
            headerName: "Name", field: "name"

          }, {
            headerName: "Subscribed To Channel", field: "subscribedToChannel"
          }, {
            headerName: "Date", field: "date"
          }],
        //   rowData: [{
        //     make: "Toyota", model: "Celica", price: 35000
        //   }, {
        //     make: "Ford", model: "Mondeo", price: 32000
        //   }, {
        //     make: "Porsche", model: "Boxter", price: 72000
        //   }]
        })
    
        const [row, setRow] = useState([])

        useEffect(() => {
            setRow(props.subscribers)
        }, [])

    return (
        <>
        <p>Grid view of subscriber details</p>
        <div 
        className="ag-theme-balham"
        style={{ 
        height: '500px', 
        width: '600px' }} 
      >
        <AgGridReact
          columnDefs={columns.columnDefs}
          rowData={row}>
        </AgGridReact>
        </div>
        </>
    )

}

export default Grid;