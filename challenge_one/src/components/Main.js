import React from 'react'

import Countdown from './Countdown'
import FriendDate from './FriendDate'
import ColorView from './ColorView';

const Main = () => {
    return(
        <div>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Challenge One</h1>
            <p className="lead">Componente ColorView: dado um código de cor em RGB (em decimal e em hexa) mostrar a cor em si (tratando a diferença entre decimal e hexa).</p>
          </div>

          <div className="container">
            <div className="card-deck mb-3 text-center">
              <Countdown />
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">FriendDate</h4>
                </div>
                <div className="card-body">
                    <FriendDate />
                </div>
              </div>
              <ColorView />
            </div>
          </div>
        </div>
    )
}

export default Main