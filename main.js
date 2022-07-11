const { app, BrowserWindow } = require('electron')
const path = require('path')
const sound = require('sound-play')
const startuSound = path.join(__dirname, 'startup-sound.mp3')
const appIcon = path.join(__dirname, 'list.png')

function createWindow() {
  const window = new BrowserWindow({
    icon: appIcon,
    ferences: {
      // nodeIntegration: false,
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      // contextIsolation: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })

  window.loadFile('index.html')
  // window.setMenu(null)
  app.setLoginItemSettings({
    openAtLogin: true
  })
}

app.whenReady().then(createWindow).then(sound.play(startuSound))
