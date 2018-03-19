import { createStore } from 'redux'

const reducer = (state={ test: 1}, action) => {
    if(action.type === 'COUNT'){
        return {...state, test: state.test + 1}
    } 
    return state
}

const store = createStore(reducer)
export default store 