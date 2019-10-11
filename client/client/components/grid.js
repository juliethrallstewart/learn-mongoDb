import React, { useState, useEffect, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react';
import '../node_modules/ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';
import 'ag-grid-community/dist/styles/ag-theme-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';



//The three lines above import the AgGridReact component, 
//the grid "structure" stylesheet (ag-grid.css), and one of the 
//available grid themes: (ag-theme-balham.css).



const Grid = (props) => {

    const [columns] = useState({
        columnDefs: [{
            headerName: "Subscribe Date", field: "subscribeDate", sortable: true, filter: true, checkboxSelection: true
          }, {
            headerName: "Id", field: "_id", sortable: true, filter: true
          }, {
            headerName: "Name", field: "name", sortable: true, filter: true

          }, {
            headerName: "Subscribed To Channel", field: "subscribedToChannel", sortable: true, filter: true
          }, {
            headerName: "Date", field: "date", sortable: true, filter: true
          }],
        })
    
        const [row, setRow] = useState([])

        useEffect(() => {
            setRow(props.subscribers)
        }, [])

        // const [gridApi, setGridApi] = useState();

        console.log(row)

        const onButtonClick = e => {
            console.log(gridApi, 'this is the grid api')
            const selectedNodes = gridApi.getSelectedNodes()
            const selectedData = selectedNodes.map( node => node.data )

            console.log(selectedData)
            const selectedDataStringPresentation = selectedData.map( node => node.name + ' ' + node.subscribedToChannel).join(', ')
            
            alert(`Selected nodes: ${selectedDataStringPresentation}`)
            }
        
            const onBtPrint = () => {
                gridApi = gridApi;
                setPrinterFriendly(gridApi);
                setTimeout(function() {
                  print();
                  setNormal(gridApi);
                }, 2000);
              }

           let gridApi;

    return (
        <>
   
    <div style={{ height: '200px', maxWidth: '800px', margin: '0 auto' }} className="ag-theme-blue my-grid">
     <button onClick={onButtonClick}>Get selected rows</button>
     <button onClick={onBtPrint.bind(this)}>Print</button>
 
        <AgGridReact
            onGridReady={ params => gridApi = params.api }
            rowSelection="multiple"
            columnDefs={columns.columnDefs}
            rowData={row}>
        </AgGridReact>
    </div>
        </>
    )

}

function setPrinterFriendly(api) {
    var eGridDiv = document.querySelector(".my-grid");
    eGridDiv.style.width = "100%";
    eGridDiv.style.height = "100%";
    api.setDomLayout("print");
  }
  function setNormal(api) {
    var eGridDiv = document.querySelector(".my-grid");
    eGridDiv.style.width = "800px";
    eGridDiv.style.height = "200px";
    api.setDomLayout(null);
  }
  

export default Grid;

// const [columns] = useState({
//     columnDefs: [{
//         headerName: "Subscribe Date", field: "subscribeDate"
//       }, {
//         headerName: "Id", field: "_id"
//       }, {
//         headerName: "Name", field: "name"

//       }, {
//         headerName: "Subscribed To Channel", field: "subscribedToChannel"
//       }, {
//         headerName: "Date", field: "date"
//       }],
//       rowData: [{
//         make: "Toyota", model: "Celica", price: 35000
//       }, {
//         make: "Ford", model: "Mondeo", price: 32000
//       }, {
//         make: "Porsche", model: "Boxter", price: 72000
//       }]
//     })

