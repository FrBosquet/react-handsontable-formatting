import React from 'react'

const ToolBox = ({handleFormatCells, currentSelection}) => {
  return (<div className='spreadsheet-toolbox' >
    <div>{JSON.stringify(currentSelection)}</div>
    <button onClick={handleFormatCells}>rojo</button>
    <button onClick={handleFormatCells}>negrita</button>
  </div>)
}

export default ToolBox