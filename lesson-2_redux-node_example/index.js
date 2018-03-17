const redux = require('redux')

const counterReducer = (state=0, action) => {
    if(action.type === 'SOMA'){
        return state + action.value
    }
    return state
}

const soma = { type: 'SOMA', value: 3 }
const subt = { type: 'SUBT', value: 3 }

const store = redux.createStore(counterReducer)

store.subscribe( () => {
    console.log('Store Alterado', store.getState())
})

store.dispatch(soma)
store.dispatch(soma)
store.dispatch(subt)

/* console.log(store.getState()) */