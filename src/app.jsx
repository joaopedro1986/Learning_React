import React from 'react'

import First from './components/First'
import Parameter from './components/Parameter'
import Fragement from './components/Fragement'
import Random from './components/random'


export default _ =>

    <div id='app'>
        <h1>Fundaments React</h1>
        <Random  min = {4} max = {40} />
        <Fragement />
        <Parameter
            title='Game'
            subtitle='Monopoly'
            rate={4.5} />
        <Parameter
            title='Game'
            subtitle='Trivial'
            rate={3.5}
        />
        <First></First>
    </div>
