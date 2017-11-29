const defaultTable = [
  [{type:'text', content: 'Headers'},{type:'text', content: 'Headers'},{type:'text', content: 'Headers'},{type:'text', content: 'Headers'},{type:'text', content: 'Headers'}],
  [{type:'text', content:'body'}, {type:'text', content:'body'}, {type:'text', content:'body'}, {type:'text', content:'body'}, {type:'text', content:'body'}],
  [{type:'text', content:'body'}, {type:'text', content:'body'}, {type:'text', content:'body'}, {type:'text', content:'body'}, {type:'text', content:'body'}]
]

const reducer = (state = defaultTable, action) => {
  switch(action.type){
    default: return state
  }
}

export default reducer