import React from 'react'
import HotTable from 'react-handsontable'

const SpreadSheet = ({data, handleSelectCells}) => (
  <div className='table-wrapper'>
    <HotTable 
      data={data}
      afterSelection={handleSelectCells}
    />
  </div> 
)

export default SpreadSheet