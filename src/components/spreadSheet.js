import React, { Component } from 'react'
import ToolBox from './toolBoxEnhanced'
import HotTable, * as HoTReact from 'react-handsontable'
import * as HoT from 'handsontable'
import _ from 'lodash'

function renderer(instance, td, row, col, prop, value, cellProperties){
  const args = Array.prototype.slice.apply(arguments)
  args[5] = value.content
  HoT.renderers.TextRenderer.apply(this, args)
  if (value.style) {
    Object.entries(value.style).map(([k, v]) => td.style[k] = v)
  }
}

const SpreadSheet = ({ 
  data, 
  handleSelectCells,
  showColHeaders
}) => (
  <div className='table-wrapper'>
    <ToolBox/>
    <HotTable
      data={data}
      outsideClickDeselects={false}
      renderer={renderer}
      colHeaders={showColHeaders}
      afterSelectionEnd={handleSelectCells}
    />
  </div>
)

export default SpreadSheet