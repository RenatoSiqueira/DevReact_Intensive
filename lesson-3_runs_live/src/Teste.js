import React from 'react'
import { connect } from 'react-redux'

const Teste = props => 
    <div>
        {JSON.stringify(props)}
        <button onClick={props.count}>Contar !</button>
        <button onClick={props.load}>Load!</button>
    </div>

const mapStateToProps = store => {
    console.log(store)
     /* return store */
    return {
        outro: store
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        count: () => dispatch({ type: 'COUNT' }),
        load: () => dispatch({ type: 'LOAD_REQUEST' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teste)