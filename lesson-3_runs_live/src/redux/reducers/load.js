const reducer = (state={ isLoading: false, data:{} }, action) => {
    if(action.type === 'LOAD_REQUEST'){
        return {...state, isLoading: true, data: 'Waiting..' }
    }
    if(action.type === 'LOAD_SUCCESS'){
        return {...state, isLoading: false, data: action.data }
    }
    if(action.type === 'LOAD_ERROR'){
        return{...state, isLoading: false, data: 'Not Found'}
    }
    return state
}

export default reducer