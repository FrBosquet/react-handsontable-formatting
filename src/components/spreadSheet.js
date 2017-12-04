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
    HoT.renderers.TextRenderer.apply(this, arguments)
    if(this.props) {
      const { style } = this.props
      const styleRow = style[row]
      const styleCell = style[row] ? style[row][col] : undefined
      if(styleCell){
        Object.entries(styleCell).forEach(([key, value]) => td.style[key] = value)
      }
    }
  }

  loadData( data ){
    const dataAsString = JSON.stringify(data)
    const dataCopy = JSON.parse(dataAsString)
    this.HoT.loadData(dataCopy)
  }

  componentDidMount(){
    this.loadData( this.props.data)
  }
  
  shouldComponentUpdate( nextProps ){
    const newData = nextProps.data
    this.loadData( newData )
    return true
  }

  afterChange(changes){
    if(changes){
      this.props.handleChangeCell(...changes)
    }
  }

  render(){
    const {
      handleSelectCells,
      handleChangeCell,
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
          afterChange={this.afterChange.bind(this)}
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