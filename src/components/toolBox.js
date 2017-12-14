import React from 'react'

const ToolBox = ({
  setRed, 
  setBold, 
  currentSelection,
  toggleColumsHeader,
  toggleRowsHeader,
  decreaseZoom, 
  increaseZoom,
  setLeftBlueBorder,
  setTopRedBorder,
  setBottomGreenBorder,
  setRightYellowBorder,
  setSquareBlackBorder,
  clearBorders
}) =>
  (<div className='spreadsheet-toolbox' >
    <button onClick={ toggleColumsHeader }>Enc. Columnas</button>
    <button onClick={ toggleRowsHeader }>Enc. Filas</button>
    <button onClick={ setRed }>rojo</button>
    <button onClick={ setBold }>negrita</button>
    <button onClick={ decreaseZoom }>zoom -</button>
    <button onClick={ increaseZoom }>zoom +</button>
    <button onClick={ setLeftBlueBorder }>Azul/Izq</button>
    <button onClick={ setTopRedBorder }>Rojo/Arriba</button>
    <button onClick={ setBottomGreenBorder }>Verde/Derecha</button>
    <button onClick={ setRightYellowBorder }>Amarillo/Abajo</button>
    <button onClick={ setSquareBlackBorder }>BordeNegro</button>
    <button onClick={ clearBorders }>Limpiar borde</button>
  </div>)

export default ToolBox