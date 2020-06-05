const { app, BrowserWindow } = require('electron')



const luoSovellusIkkuna = () => {
    const sovellusIkkuna = new BrowserWindow({
        width: 1000,
        height: 1000
    })
    
    // lataa html
    sovellusIkkuna.loadFile('./build/index.html')

     // Chrome-kehitystyokalut
    sovellusIkkuna.webContents.openDevTools()    

}


app.on('ready', () => {
    console.log('Sovellus valmis')
    luoSovellusIkkuna()
})