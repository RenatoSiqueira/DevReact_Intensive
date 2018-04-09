import { put } from 'redux-saga/effects'
import axios from 'axios'

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

export default load