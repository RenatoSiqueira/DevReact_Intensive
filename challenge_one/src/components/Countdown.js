import React, { Component } from 'react'

import CountdownClock from './CountdownClock'

class Countdown extends Component{
    constructor(props){
        super(props)

        this.state = {
            end: 'December 25, 2018'
        }

        this.onKeyDown = this.onKeyDown.bind(this)
    }

    changeEnd(){
        this.setState({
            end: this.state.newEnd
        })
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
            <div>
                <h1 className="card-title pricing-card-title"><CountdownClock end={this.state.end}/></h1>
                <div className="mt-3 mb-4">
                    <label>{this.state.end}</label>
                    <input 
                        ref="inputCountdown"
                        onChange={ (event)=>this.setState({newEnd:event.target.value}) } 
                        onKeyDown={this.onKeyDown}
                        type="text" className="form-control" placeholder="December 25, 2018"/>
                </div>
                <button 
                    onClick={ () => this.changeEnd()}
                    type="button" className="btn btn-lg btn-block btn-outline-primary">Run!</button>
            </div>
        )
    }
}

export default Countdown