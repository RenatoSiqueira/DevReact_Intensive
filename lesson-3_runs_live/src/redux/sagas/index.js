import { takeLatest } from 'redux-saga/effects'
import counter from './counter'
import load from './load'

function *saga(){
    //yield console.log('hello saga!')
    yield takeLatest('COUNT', counter)
    yield takeLatest('LOAD_REQUEST', load)
}

export default saga