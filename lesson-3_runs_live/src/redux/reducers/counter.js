const reducer = (state={ test: 1 }, action) => {
    if(action.type === 'COUNT'){
        return {...state, test: state.test + 1}
    } 
    return state
}

export default reducer