import React, { Component } from 'react'
import HotTable from 'react-handsontable'
import * as HoT from 'handsontable'

function renderer(instance, td, row, col, prop, value, cellProperties){
  HoT.renderers.TextRenderer.apply(this, arguments)
  //if (value.style) td.style = _.merge({}, td.style, value.style)
  //td.textContent = value
}

class SpreadSheet extends Component {
  constructor(props) {
    super(props)
    this.handleFormatCells_1 = this.handleFormatCells.bind(this, { color: 'red' })
    this.handleFormatCells_2 = this.handleFormatCells.bind(this, { fontSize: 'bold' })
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
    console.log(this.el)
    return (
      <div className='table-wrapper'>
        <button id='paco' onClick={this.handleFormatCells_1}>rojo</button>
        <button id='paco' onClick={this.handleFormatCells_2}>negrita</button>
        <HotTable ref={el => this.HoT = el.hotInstance}
          data={data}
          outsideClickDeselects={false}
          renderer={renderer}
        />
      </div>
    )
  }
}

export default SpreadSheet