import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
    color: red;
    background-color: yellow;
`

const ChildrenTest = ({children}) => {
    return(
        <div>
            <Cont>{children}</Cont>
        </div>
    )
}

export default ChildrenTest