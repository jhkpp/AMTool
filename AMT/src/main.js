// main.js
const { app, BrowserWindow, Menu, Tray } = require('electron')
const path = require('path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')
}

let tray = null

app.whenReady().then(() => {
  createWindow()

  tray = new Tray('icon/icon.jpg')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'admin', type: 'normal' },
  ])
  tray.setToolTip('AMT')
  tray.setContextMenu(contextMenu)

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
