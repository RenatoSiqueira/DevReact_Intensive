import React, { Component } from 'react'

class ColorView extends Component{
    constructor(props){
        super(props)

        this.state = {
            color: '#F7F7F7'
        }

        this.onKeyUp = this.onKeyUp.bind(this)
    }

    onKeyUp(){
        const color = this.refs.inputColor.value
        color.includes("#") ? this.setState({ color }) : this.setState({ color:"rgb("+color+")" })
    }

    render(){
        const { color } = this.state
        return(
            <div className="card mb-4 box-shadow">
            <div className="card-header" style={{"backgroundColor":color}}>
              <h4 className="my-0 font-weight-normal">ColorView</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">
                <div style={{"backgroundColor":color}} className="colordivbig rounded">
                    <div className="hexcolor">{color}</div>
                </div>
                </h1>
                <div className="mt-3 mb-4">
                    <input 
                        ref="inputColor"
                        onKeyUp={this.onKeyUp}
                        maxLength="11"
                        className="form-control" type="text" placeholder="Insert Color Value"/>
                    <br/>
                    <div className="alert alert-primary">
                        How to Use:<br/>
                        in Hexa: <strong>#FF00FF</strong><br/>
                        in RGB: <strong>250,0,255</strong><br/>
                        [only numbers with comma]
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default ColorView