const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow (){
    let window = new BrowserWindow({
        width:800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    window.loadFile('index.html')
}

app.on('ready', createWindow)

ipcMain.on('submit', (event, arg)=> {
    //Get the proper things
})