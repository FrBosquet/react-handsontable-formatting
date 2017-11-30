import React, { Component } from 'react'
import ToolBox from './toolBoxEnhanced'
import HotTable, * as HoTReact from 'react-handsontable'
import * as HoT from 'handsontable'
import _ from 'lodash'

function renderer(instance, td, row, col, prop, value, cellProperties){
  const args = Array.prototype.slice.apply(arguments)
  args[5] =value ? value.content : ''
  HoT.renderers.TextRenderer.apply(this, args)
  if (value && value.style) {
    Object.entries(value.style).map(([k, v]) => td.style[k] = v)
  }
}

const SpreadSheet = ({ 
  data, 
  handleSelectCells,
  showColHeaders,
  showRowHeaders
}) => (
  <div className='table-wrapper'>
    <ToolBox/>
    <HotTable
      data={data}
      outsideClickDeselects={false}
      renderer={renderer}
      contextMenu
      mergeCells
      colHeaders={showColHeaders}
      rowHeaders={showRowHeaders}

      afterRemoveRow={e=>console.log(typeof e)}
      afterSelectionEnd={handleSelectCells}
    />
  </div>
)

export default SpreadSheet