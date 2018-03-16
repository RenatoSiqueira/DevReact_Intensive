import React, { Component } from 'react'
import axios from 'axios'

const withHTTP = WrappedComponent => url => {
// or const withHTTP = (WrappedComponent,url) => {    
    return class extends Component{
        constructor(props){
            super(props)
    
            this.state = {
                data: '',
                isLoading: false
            }
        }
    
        componentDidMount(){
            this.setState({ isLoading: true })
            axios
                .get(url)
                .then( data => {
                    this.setState({ data: data.data, isLoading: false })
                })
        }

        render(){
            return <WrappedComponent data={this.state.data} isLoading={this.state.isLoading} {...this.props} />
        }
    }
}

export default withHTTP