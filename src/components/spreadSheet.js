import React, { Component } from 'react'
import ToolBox from './toolBoxEnhanced'
import HotTable, * as HoTReact from 'react-handsontable'
import * as HoT from 'handsontable'
import _ from 'lodash'
import { newEmptyCell } from '../utils'

class SpreadSheet extends Component {
  constructor(props){
    super(props)
  }

  renderer(instance, td, row, col, prop, value, cellProperties){
    // const args = Array.prototype.slice.apply(arguments)
    // args[5] =value ? value.content : ''
    // debugger
    HoT.renderers.TextRenderer.apply(this, arguments)
    if(this.props) {
      const { style } = this.props
      debugger
      const styleRow = style[row]
      const styleCell = style[row] ? style[row][col] : undefined
      if(styleCell){
        debugger
        Object.entries(styleCell).forEach(([key, value]) => td.style[key] = value)
      }
    }
    // if (value && value.style) {
    //   Object.entries(value.style).map(([k, v]) => td.style[k] = v)
    // }
  }

  loadDataFromRedux(){
    const dataAsString = JSON.stringify(this.props.data)
    const dataCopy = JSON.parse(dataAsString)
    this.HoT.loadData(dataCopy)
  }

  componentDidMount(){
    this.loadDataFromRedux()
  }

  render(){
    const {
      data,
      handleSelectCells,
      showColHeaders,
      showRowHeaders,
      addRow
    } = this.props
    return (
      <div className='table-wrapper'>
        <ToolBox />
        <HotTable
          ref={el => this.HoT = el && el.hotInstance}
          outsideClickDeselects={false}
          renderer={this.renderer.bind(this)}
          autoColumnSize={false}
          contextMenu
          mergeCells
          copyPaste
          colHeaders={showColHeaders}
          rowHeaders={showRowHeaders}
          afterCreateRow={(i) => {
            const cellsPerRow = this.HoT.getDataAtRow(i).length
            for(let j = 0;j < cellsPerRow; j++) this.HoT.setDataAtCell(i,j,newEmptyCell())
          }}
          afterSelectionEnd={handleSelectCells}
        />
      </div>  
    )
  }
}

export default SpreadSheet