const {app, BrowserWindow, globalShortcut} = require('electron');
const url = require('url');

let win = null;

function boot() {
  win = new BrowserWindow({
    width: 600,
    height: 400,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadURL(`file://${__dirname}/index.html`);

  win.on('closed', _ => {
    win = null;
  })

  globalShortcut.register('CommandOrControl+1', () => {
    win.isMaximized() ? win.unmaximize() : win.maximize();
  });
}

app.on('ready', boot);
