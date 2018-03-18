import React, { Component } from 'react'

import CountdownClock from './CountdownClock'

class Countdown extends Component{
    constructor(props){
        super(props)

        this.state = {
            end: this.props.initialDate
        }
        this.onKeyDown = this.onKeyDown.bind(this)
    }

    changeEnd(){
        if(this.refs.inputCountdown.value){
            this.setState({
                end: this.state.newEnd
            })
        }
    }

    onKeyDown(event){
        if(event.which === 13){
            if(this.refs.inputCountdown.value){
                this.changeEnd()
            }
        } 
    }

    render(){
        return(
            <div className="card mb-4 box-shadow">            
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">CountDown</h4>
                </div>
                <div className="card-body">
                <h1 className="card-title pricing-card-title">
                    <CountdownClock end={this.state.end}/>
                </h1>
                <div className="mt-3 mb-4">
                    <label>{this.state.end}</label>
                    <input 
                        ref="inputCountdown"
                        onChange={ (event)=>this.setState({ newEnd:event.target.value }) } 
                        onKeyDown={this.onKeyDown}
                        type="text" className="form-control" placeholder="December 25, 2018"/>
                </div>
                <button 
                    onClick={ () => this.changeEnd() }
                    type="button" className="btn btn-lg btn-block btn-outline-primary">Run!</button>
                </div>
            </div>
        )
    }
}

export default Countdown