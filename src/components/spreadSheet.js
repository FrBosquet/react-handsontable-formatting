import React, { Component } from 'react'
import ToolBox from './toolBoxEnhanced'
import HotTable, * as HoTReact from 'react-handsontable'
import * as HoT from 'handsontable'
import _ from 'lodash'
import { newEmptyCell } from '../utils'

class SpreadSheet extends Component {
  constructor(props){
    super(props)
    this.renderer = this.renderer.bind(this)
    this.loadData = this.loadData.bind(this)
  }

  renderer(instance, td, row, col, prop, value, cellProperties){
    let args = Array.prototype.slice.apply(arguments)
    
    if(value && /=/.test(value[0])){
      const param = value.substr(1)
      args[5] = this.props.telemetry[param]
    }
    HoT.renderers.TextRenderer.apply(this, args)
    td.style.fontSize = `${this.props.zoomFactor}rem`
    if(this.props) {
      const { style, borders } = this.props
      const styleCell = style[row] ? style[row][col] : undefined
      const borderCell = borders[row] ? borders[row][col] : undefined
      const rightBorderCell = borders[row] ? borders[row][col + 1] : undefined
      const downBorderCell = borders[row + 1] ? borders[row + 1][col] : undefined

      if(styleCell){
        Object.entries(styleCell).forEach(([key, value]) => td.style[key] = value)
      }

      if(borderCell){
        if(borderCell.left){
          if(borderCell.left.style) td.style.borderLeftStyle = borderCell.left.style
          if(borderCell.left.width) td.style.borderLeftWidth = `${borderCell.left.width}px`
          if(borderCell.left.color) td.style.borderLeftColor = borderCell.left.color
        }
        
        if (borderCell.top) {
          if (borderCell.top.style) td.style.borderTopStyle = borderCell.top.style
          if (borderCell.top.width) td.style.borderTopWidth = `${borderCell.top.width}px`
          if (borderCell.top.color) td.style.borderTopColor = borderCell.top.color
        }
      }

      if(rightBorderCell){
        if (rightBorderCell.left) {
          if (rightBorderCell.left.style) td.style.borderRightStyle = rightBorderCell.left.style
          if (rightBorderCell.left.width) td.style.borderRightWidth = `${rightBorderCell.left.width}px`
          if (rightBorderCell.left.color) td.style.borderRightColor = rightBorderCell.left.color
        }
      }

      if (downBorderCell) {
        if (downBorderCell.top) {
          if (downBorderCell.top.style) td.style.borderBottomStyle = downBorderCell.top.style
          if (downBorderCell.top.width) td.style.borderBottomWidth = `${downBorderCell.top.width}px`
          if (downBorderCell.top.color) td.style.borderBottomColor = downBorderCell.top.color
        }
      }
    }
  }

  componentDidMount() {
    this.loadData(this.props.data)    
  }

  componentDidUpdate() {
    this.loadData(this.props.data)
  }

  loadData( data ){
    this.HotTableInstance.loadData(JSON.parse(JSON.stringify(data)))
  }

  render(){
    const {
      handleSelectCells,
      handleChangeCell,
      showColHeaders,
      showRowHeaders,
      handleAddRow,
      handleRemoveCol,
      handleAddCol,
      handleRemoveRow,
      handleChange,
      zoomFactor,
      columnsWidths,
      rowsHeights
    } = this.props

    return (
      <div className='table-wrapper'>
        <ToolBox />
        <HotTable
          ref={HTMLelement => this.HotTableInstance = HTMLelement && HTMLelement.hotInstance}
          outsideClickDeselects={false}
          renderer={this.renderer}
          autoColumnSize
          colWidths={columnsWidths}
          rowHeights={rowsHeights}
          contextMenu
          mergeCells
          copyPaste
          afterRemoveCol = {handleRemoveCol}
          afterCreateCol = {handleAddCol}
          afterRemoveRow = {handleRemoveRow}
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