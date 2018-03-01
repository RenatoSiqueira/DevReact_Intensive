import React, { Component } from 'react'

class ColorView extends Component{
    render(){
        return(
            <div>
                <h1 className="card-title pricing-card-title">XX <small className="text-muted">A</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li>Some Text</li>
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-primary">Get Started</button>
            </div>
        )
    }
}

export default ColorView