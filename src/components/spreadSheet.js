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
    let args = Array.prototype.slice.apply(arguments)
    
    if(value && /=/.test(value[0])){
      const param = value.substr(1)
      args[5] = this.props.telemetry[param]
      debugger
    }
    HoT.renderers.TextRenderer.apply(this, args)
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
      handleAddRow,
      handleAddCol,
      handleChange
    } = this.props

    return (
      <div className='table-wrapper'>
        <ToolBox />
        <HotTable
          ref={HTMLelement => this.HotTableInstance = HTMLelement && HTMLelement.hotInstance}
          outsideClickDeselects={false}
          renderer={this.renderer}
          autoColumnSize={true}
          contextMenu
          mergeCells
          copyPaste
          afterCreateCol = {handleAddCol}
          afterCreateRow={ handleAddRow }
          afterSetDataAtCell={ handleChange }
          colHeaders={showColHeaders}
          rowHeaders={showRowHeaders}
          afterSelectionEnd={handleSelectCells}
        />
      </div>  
    )
  }
}

export default SpreadSheet