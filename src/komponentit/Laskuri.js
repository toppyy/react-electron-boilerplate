
import React from 'react'
import Nappula from './Nappula'
import createActionKasvataSummaa from '../actions/createActionKasvataSummaa'

const Laskuri = ({ summa, dispatchaa }) => {


    const kasitteleKlikkaus = () => {

        dispatchaa( createActionKasvataSummaa() )
    }


    return(
        <div>
            
            Summa: { summa }
            <br></br>
            <Nappula nappulaaKlikatessa={kasitteleKlikkaus} teksti="Kasvata summaa"/>
        </div>
    )
}




export default Laskuri