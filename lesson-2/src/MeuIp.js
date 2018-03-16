import React from 'react'
import withHTTP from './withHTTP'

const MeuIp = props => <h1>Meu Ip {JSON.stringify(props)}</h1>

export default withHTTP(MeuIp)('http://httpbin.org/ip')