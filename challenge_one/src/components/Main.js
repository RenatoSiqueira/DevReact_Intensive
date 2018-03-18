import React from 'react'

import Countdown from './Countdown'
import FriendDate from './FriendDate'
import ColorView from './ColorView';

const Main = () => {
    return(
        <div>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4"><strong>Challenge One</strong></h1>
            <p className="lead"></p>
          </div>
          <div className="container">
            <div className="card-deck mb-4 text-center">

              <Countdown initialDate='December 25, 2018'/>
              <FriendDate date='2018-06-15' type="default"/>
              <ColorView initialColor='#F7F7F7'/>

            </div>
          </div>
        </div>
    )
}

export default Main