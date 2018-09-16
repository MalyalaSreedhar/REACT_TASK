import React,{Component} from 'react';
import  './DisplayData.css'
const tableHeader = ["SNO","NAME","CREATED_ON"]
function DisplayData(props){

  const tableHederContent = tableHeader.map(x=>{
    return (
      <th key={x} className="cssAlignment">{x}</th>
    )
  })

   const tableRows = props.information.map(x=>{
     const length = props.information.length;

       const rows =  <tr onClick={()=>props.removeData(x.sno)} key={Math.random()*length}>{Object.keys(x).map(data=>{
        
          return(
              <td className="cssAlignment" key={Math.random()*length}>{x[data]}</td>
            )
       })}</tr>

       return rows;
   })



  return(
    <div>
      <h3>Display data in table format</h3>
      <table className="cssAlignment">
      <thead>
        <tr>
          {tableHederContent}
        </tr>
        </thead>
        <tbody>
          {tableRows}

        </tbody>
      </table>
    </div>
  )
}

export default DisplayData;
