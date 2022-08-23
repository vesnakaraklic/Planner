const { app, BrowserWindow } = require('electron')
const path = require('path')
const sound = require('sound-play')
const startuSound = path.join(
  __dirname,
  'src',
  'js',
  'assets',
  'sounds',
  'startup-sound.mp3'
)
const appIcon = path.join(
  __dirname,
  'src',
  'js',
  'assets',
  'images',
  'list.png'
)

function createSplashWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 200,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true
    }
  })
  win.loadFile('splash.html')
  return win
}

function createWindow() {
  const window = new BrowserWindow({
    icon: appIcon,
    show: false,
    webPreferences: {
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
  return window
}

app
  .whenReady()
  .then(() => {
    const mainApp = createWindow()
    const splash = createSplashWindow()

    mainApp.once('ready-to-show', () => {
      splash.destroy()
      mainApp.show()
    })
  })
  .then(sound.play(startuSound))
