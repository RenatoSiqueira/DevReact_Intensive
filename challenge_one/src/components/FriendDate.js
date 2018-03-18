import React, { Component } from 'react'
import FriendDateResult from './FriendDateResult'

class FriendDate extends Component{
    constructor(props){
        super(props)

        this.state = {
            date: this.props.date,
            type: this.props.type,
            isChecked: false
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        this.setState({
            date: this.refs.inputFriend.value
        })
    }

    toggleChange = () =>{
        if(this.state.isChecked){
            this.setState({ 
                isChecked: !this.state.isChecked, 
                type: 'default' 
            })
        } else {
            this.setState({ 
                isChecked: !this.state.isChecked, 
                type: 'extensive' 
            })
        }
    }

    render(){
        return(
            <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">FriendlyDate</h4>
                </div>
                <div className="card-body">

                    <FriendDateResult finalDate={this.state.date} type={this.state.type}/>

                    <input 
                        ref="inputFriend"
                        className="form-control" type="date" placeholder="Insert a Date" defaultValue='2018-03-17'/>
                    <div className="form-check">
                        <input 
                            className="form-check-input" type="checkbox" 
                            value="extensive" id="extensiveDate" 
                            checked={ this.state.isChecked }
                            onChange={ this.toggleChange }
                        />
                        <label className="form-check-label" htmlFor="extensiveDate">Mark this for Extensive Date</label>   
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