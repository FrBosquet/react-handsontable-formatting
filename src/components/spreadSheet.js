import React from 'react'
import HotTable from 'react-handsontable'

const SpreadSheet = ({data}) => (
  <div className='table-wrapper'>
    <HotTable 
      data={data}
    />
  </div> 
)

export default SpreadSheet