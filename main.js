const { app, BrowserWindow, Menu } = require("electron");

function createWindow() {
  const window = new BrowserWindow({
    webPreferences: {
      // nodeIntegration: false,
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      // contextIsolation: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  window.loadFile("index.html");
  //window.setMenu(null);
  window.maximize();
  window.webContents.openDevTools();
}

app.whenReady().then(createWindow);
