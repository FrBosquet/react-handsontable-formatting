import React from 'react'

const ToolBox = ({setRed, setBold, currentSelection}) => {
  return (<div className='spreadsheet-toolbox' >
    <button onClick={setRed}>rojo</button>
    <button onClick={setBold}>negrita</button>
  </div>)
}

export default ToolBox