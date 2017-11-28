import { SELECT_CELLS } from '../actionTypes';

const reducer = (state ={}, action) =>{
  switch(action.type){
    case SELECT_CELLS: return action.payload
    default: return state
  }
}

export default reducer