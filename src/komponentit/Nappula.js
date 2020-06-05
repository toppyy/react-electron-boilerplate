import React from 'react'

const Nappula = ({ nappulaaKlikatessa, teksti }) => {
    return(
        <button onClick={nappulaaKlikatessa}>{teksti}</button>
    )
}

export default Nappula