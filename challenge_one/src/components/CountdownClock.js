import React, { Component } from 'react'

class CountdownClock extends Component{
    constructor(props){
        super(props)

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isValid: true,
            today: false
        }
    }

    timeUntil(end){
        const time = Date.parse(end) - Date.parse(new Date())
        const seconds = Math.floor((time/1000) % 60)
        const minutes = Math.floor((time/1000/60) % 60)
        const hours = Math.floor(time/(1000*60*60) % 24)
        const days = Math.floor(time/(1000*60*60*24))

        switch(Math.sign(days)){
            case -1:
                if(days < -1){
                    this.setState({
                        isValid: false,
                        today: false
                    })
                } else {
                    this.setState({
                        isValid: false,
                        today: true
                    })
                }
            break
            default:                
                this.setState({
                    isValid: true,
                    today: false
                })            
            break
        }

        this.setState({ days, hours, minutes, seconds })
    }

    componentWillMount(){
        this.timeUntil(this.props.end)
    }    

    componentDidMount(){
        setInterval( ()=> this.timeUntil(this.props.end),1000)
    }

    render(){
        return(
            <div>
                { this.state.isValid &&
                <div>
                    {this.state.days}<small>D</small> {this.state.hours}<small>H</small> {this.state.minutes}<small>M</small> {this.state.seconds}<small>S</small>
                </div> }

                { this.state.today &&
                <div className="alert alert-primary" role="alert">
                    It´s Today!                    
                </div> }                

                { !this.state.isValid && !this.state.today && 
                <div className="alert alert-danger" role="alert">
                    Back to Future?
                </div> }
            </div>
        )
    }
}

export default CountdownClock