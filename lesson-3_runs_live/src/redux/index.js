import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'

const reducer = (state={ test: 1, isLoading: false, data:{} }, action) => {
    if(action.type === 'COUNT'){
        return {...state, test: state.test + 1}
    } 
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

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

function *counter(){
    yield console.log('counter')
}

function *load(){
    
    try {

        const ip = yield axios.get('http://httpbin.org/ip')        
        yield put({
            type: 'LOAD_SUCCESS',
            data: ip.data
        })

    } catch (error) {
        yield put({
            type: 'LOAD_ERROR'
        })
    }
}

function *saga(){
    //yield console.log('hello saga!')
    yield takeLatest('COUNT', counter)
    yield takeLatest('LOAD_REQUEST', load)
}

sagaMiddleware.run(saga)

export default store 