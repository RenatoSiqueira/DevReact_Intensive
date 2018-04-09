import React from 'react'
import { connect } from 'react-redux'

const Ip = props => 
    <div>
        {JSON.stringify(props)}
        <button onClick={props.load}>Load!</button>
    </div>

const mapStateToProps = store => {
    return {
        data: store.load
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        load: () => dispatch({ type: 'LOAD_REQUEST' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ip)