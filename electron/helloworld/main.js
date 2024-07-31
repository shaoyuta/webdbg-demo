const {app, BrowserWindow} = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
  console.log('create window');
};

app.whenReady().then(() => {
  createWindow()
})

app.on('ready', ()=>{
  console.log("ready")
}
);

app.on('before-quit', ()=>{
  console.log("before-quit")
}
);

app.on('window-all-closed', ()=>{
  console.log("window-all-closed")
}
);

