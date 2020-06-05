
import React, { useState } from 'react'
import Nappula from './Nappula'

const Laskuri = () => {

    const [summa,setSumma] = useState(0)

    const kasvataSummaa = () => {
        const uusiSumma = summa + 1
        setSumma(uusiSumma)
    }

    return(
        <div>
            
            Summa: { summa }
            <br></br>
            <Nappula nappulaaKlikatessa={kasvataSummaa} teksti="Kasvata summaa"/>
        </div>
    )
}

export default Laskuri