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

class SpreadSheet extends Component {
  render() {
    const { data, handleSelectCells } = this.props
    return (
      <div className='table-wrapper'>
        <ToolBox/>
        <HotTable ref={el => this.HoT = el && el.hotInstance}
          data={data}
          outsideClickDeselects={false}
          renderer={renderer}
          afterSelectionEnd={this.props.handleSelectCells}
        />
      </div>
    )
  }
}

export default SpreadSheet