
import React from 'react'
import ReactDOM from 'react-dom'

import Laskuri from './komponentit/Laskuri'

const sovellus = () => {

    return(<Laskuri/>    )
}


ReactDOM.render(sovellus(), document.getElementById('sailio'))