import React, { Component } from 'react'
import HotTable from 'react-handsontable'
import * as HoT from 'handsontable'
import _ from 'lodash'

function renderer(instance, td, row, col, prop, value, cellProperties){
  const args = Array.prototype.slice.apply(arguments)
  args[5] = value.content
  HoT.renderers.TextRenderer.apply(this, args)
  if (value.style) {
    // debugger
    Object.entries(value.style).map(([k, v]) => td.style[k] = v)
    console.log('aSDFASDFG')
  }
  //td.textContent = value
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
    console.log('render')
    console.log(this.HoT)
    return (
      <div className='table-wrapper'>
        <button id='paco' onClick={this.handleFormatCells_1}>rojo</button>
        <button id='paco' onClick={this.handleFormatCells_2}>negrita</button>
        <HotTable ref={el => this.HoT = el && el.hotInstance}
          data={data}
          outsideClickDeselects={false}
          renderer={renderer}
        />
      </div>
    )
  }
}

export default SpreadSheet