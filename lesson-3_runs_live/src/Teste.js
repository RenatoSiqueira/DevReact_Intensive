import React from 'react'
import { connect } from 'react-redux'

const Teste = props => 
    <div>
        {JSON.stringify(props)}
        <button onClick={props.count}>Contar !</button>
    </div>

const mapStateToProps = store => {
    console.log(store)
     /* return store */
    return {
        outroNome: store.test
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        count: () => dispatch({ type: 'COUNT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teste)