
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Laskuri from './komponentit/Laskuri'
import summa from './reducers/summa'


const store = createStore(summa)




const Applikaatio = ({ store }) => {
    return(
        <Laskuri summa={ store.getState() } dispatchaa={ store.dispatch  }  />
    )
}

const renderointi =  () => ReactDOM.render(  <Applikaatio store={store} />, document.getElementById('sailio'))


store.subscribe( renderointi )


renderointi()