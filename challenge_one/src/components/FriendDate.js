import React, { Component } from 'react'
import FriendDateResult from './FriendDateResult'

class FriendDate extends Component{
    constructor(props){
        super(props)

        this.state = {
            date: this.props.data
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        console.log(this.refs.inputFriend.value)
        this.setState({
            date: this.refs.inputFriend.value
        })
    }

    render(){
        return(
            <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">FriendDate</h4>
                </div>
                <div className="card-body">
                    <FriendDateResult finalDate={this.state.date} type="extensive"/>                   
                    <input 
                        ref="inputFriend"
                        className="form-control" type="date" placeholder="Insert a Date" defaultValue='2018-03-17'/>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                        Mark this for Extensive Date
                        </label>   
                    </div>                 
                    <br />                       
                    <button 
                        onClick={this.onClick}
                        type="button" className="btn btn-lg btn-block btn-primary">FriendDate-me!</button>
                </div>
            </div>
        )
    }
}

export default FriendDate