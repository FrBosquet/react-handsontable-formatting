import * as actionTypes from '../actionTypes'
import { mergeObjects } from '../utils'


const defaultTable = [
  [{type:'text', style:{}, content:'Headers'},{type:'text', style:{}, content:'Headers'},{type:'text', style:{}, content:'Headers'},{type:'text', style:{}, content:'Headers'},{type:'text', style:{}, content: 'Headers'}],
  [{type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}],
  [{type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}, {type:'text', style:{}, content:'body'}]
]

const reducer = (state = defaultTable, action) => {
  switch(action.type){
    default: return state
    case actionTypes.SET_FORMAT: return mergeObjects(state, action.cells)
  }
}

export default reducer