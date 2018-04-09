import { combineReducers } from 'redux'
import counterReducer from './counter'
import loadReducer from './load'

const reducers = combineReducers({
    counter: counterReducer,
    load: loadReducer
})

export default reducers