import * as actionTypes from '../actionTypes'
import { mergeObjects, populateWith } from '../utils'

const defaultTable = [
  [{type:'text', style:{}, content:'Headers'},{type:'text', style:{}, content:'Headers'},{type:'text', style:{}, content:'Headers'},{type:'text', style:{}, content:'Headers'},{type:'text', style:{}, content: 'Headers'}],
  [{type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}],
  [{type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}]
]

const reducer = (state = defaultTable, action) => {
  switch(action.type){
    default: return state
    case actionTypes.SET_FORMAT: 
      const {selected, format} = action.payload
      const formatedCells = populateWith(selected, format)
      return mergeObjects(state, formatedCells)
  }
}

export default reducer