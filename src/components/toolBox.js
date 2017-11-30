import React from 'react'

const ToolBox = ({
  setRed, 
  setBold, 
  currentSelection,
  toggleColumsHeader,
  toggleRowsHeader
}) =>
  (<div className='spreadsheet-toolbox' >
    <button onClick={toggleColumsHeader}>Enc. Columnas</button>
    <button onClick={toggleRowsHeader}>Enc. Filas</button>
    <button onClick={setRed}>rojo</button>
    <button onClick={setBold}>negrita</button>
  </div>)

export default ToolBox