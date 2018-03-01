import React, { Component } from 'react'

class FriendDate extends Component{
    constructor(props){
        super(props)

        this.state = {
            date: "25 de Janeiro, 2018"
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick(){
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
                    <h1 className="card-title pricing-card-title"><small className="text-muted">{this.state.date}</small></h1>
                    <input 
                        ref="inputFriend"
                        className="form-control" type="date" placeholder="Insert a Date"/>
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