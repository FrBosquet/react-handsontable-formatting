import { mergeObjects } from '../utils'
import { SET_FORMAT } from '../actionTypes'


const reducer = ( state = {}, action ) => {
  switch(action.type){
    case SET_FORMAT: return mergeObjects(state, action.cells)
    default: return state
  }
}

export default reducer