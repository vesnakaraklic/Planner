const { app, BrowserWindow, Menu } = require("electron");

function createWindow() {
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
    },
  });

  window.loadFile("index.html");
  //window.setMenu(null);
  window.maximize();
  window.webContents.openDevTools();
}

app.whenReady().then(createWindow);
