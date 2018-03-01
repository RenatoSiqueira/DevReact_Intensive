import React from 'react'

import Countdown from './Countdown'
import FriendDate from './FriendDate'
import ColorView from './ColorView';

const Main = () => {
    return(
        <div>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Challenge One</h1>
            <p className="lead">Componente Countdown: dado uma data futura ou passada o componente mostra de maneira amigável quantos dias/horas/minutos/etc atrás ou tempo que falta para chegar a esta data. Pense nas possibilidades que este componentes pode ter, como texto quando a contagem chegar ao fim e idioma.</p>
          </div>

          <div className="container">
            <div className="card-deck mb-3 text-center">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">CountDown</h4>
                </div>
                <div className="card-body">
                    <Countdown />
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">FriendDate</h4>
                </div>
                <div className="card-body">
                    <FriendDate />
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">ColorView</h4>
                </div>
                <div className="card-body">
                    <ColorView />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Main