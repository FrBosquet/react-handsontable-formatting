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
  constructor(props) {
    super(props)
    this.handleFormatCells_1 = this.handleFormatCells.bind(this, { color: 'red' })
    this.handleFormatCells_2 = this.handleFormatCells.bind(this, { fontWeight: 'bold' })
  }
  handleFormatCells(format, e) {
    e.preventDefault()
    e.stopPropagation()
    if (!this.HoT) return
    this.props.handleFormatCells(format, this.HoT.getSelected())
  }

  render() {
    const { data, handleSelectCells, handleFormatCells } = this.props
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