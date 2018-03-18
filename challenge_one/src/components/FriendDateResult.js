import React from 'react'

const Final = ({children}) =>
    <h1 className="card-title pricing-card-title">
        {children}
    </h1>        

const FriendDateResults = props => { 

    const date = new Date(props.finalDate)
    const day = date.getUTCDate()
    const month = date.getUTCMonth()
    const year = date.getUTCFullYear()
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    switch(props.type){
        case 'extensive':          
            return <Final>
                    {day} of {monthNames[month]}, {year}
                </Final>
        default:
            return <Final>{props.finalDate}</Final> 
    }
}

export default FriendDateResults