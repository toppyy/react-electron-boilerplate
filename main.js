const { app, BrowserWindow } = require('electron')



const luoSovellusIkkuna = () => {
    const sovellusIkkuna = new BrowserWindow()
    
    // lataa html
    sovellusIkkuna.loadFile('index.html')

}


app.on('ready', () => {
    console.log('Sovellus valmis')
    luoSovellusIkkuna()
})