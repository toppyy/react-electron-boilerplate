const { app, BrowserWindow } = require('electron')



const luoSovellusIkkuna = () => {
    const sovellusIkkuna = new BrowserWindow({
        width: 1200,
        height: 600
    })
    
    // lataa html
    //

    if (process.env.NODE_ENV === 'dev') {
        sovellusIkkuna.loadURL('http://localhost:'.concat(process.env.PORT))
    } else {
        sovellusIkkuna.loadFile('./build/index.html')
    }

     // Chrome-kehitystyokalut
    sovellusIkkuna.webContents.openDevTools()    

}


app.on('ready', () => {

    console.log('ymparisto ja portti', process.env.NODE_ENV, process.env.PORT )

    console.log('Sovellus valmis')
    luoSovellusIkkuna()
})