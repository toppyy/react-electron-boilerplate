const { app, BrowserWindow } = require('electron')



const luoSovellusIkkuna = () => {
    const sovellusIkkuna = new BrowserWindow({
        width: 1200,
        height: 600
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