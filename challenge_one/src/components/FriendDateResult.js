import React from 'react'

const Final = ({children}) =>
    <h1 className="card-title pricing-card-title">
        {children}
    </h1>        

const FriendDateResults = props => { 
    switch(props.type){
        case 'extensive':          
            return <Final>{props.finalDate}</Final>
        default:
            return <Final>{props.finalDate}</Final> 
    }
}

export default FriendDateResults