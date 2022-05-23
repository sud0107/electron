const { app, BrowserWindow, Tray, Menu } = require("electron");



// const createWindow = () => {
//     const win = new BrowserWindow ({
//         width: 900,
//         height: 600,
//         icon: __dirname+"image.ico",
//         frame: false
//     });
//     win.loadURL("http://www.holmiumtechnologies.com/");
//     win.webContents.openDevTools();
//     const tray = new Tray('image.ico');
//     tray.setToolTip("Tray to electron app");
//     tray.on('click', () => {
//         win.isVisible()?win.hide():win.show();
//         // app.whenReady()
//         // .then(createWindow);
//     })

    
    
// }


// // app.on('before-quit', (e) => {
// //     e.preventDefault()
// // })

// app.on('window-all-closed', (e) => {
//     e.preventDefault();
// })


// // app.on('window-all-closed', () => {
    
// //     e => e.preventDefault();
// //     // app.on('restore', () => {
// //     //     createWindow
// //     // })
// //     // const createWindow = () => {
// //     //     const win = new BrowserWindow ({
// //     //         width: 900,
// //     //         height: 600,
// //     //         icon: __dirname+"image.ico"
// //     //     });
// //     //     const tray = new Tray('image.ico');
// //     //     tray.setToolTip("Tray to electron app");
// //     //     tray.on('click', () => {
// //     //     win.isVisible()?win.hide():win.show();
// //     //     // app.whenReady()
// //     //     // .then(createWindow);
// //     // })
// //     // }
    
// //     // if(process.platform !== "darwin") {
// //     //     e => e.preventDefault();
// //     // }
// //     // createWindow()
// //     // const tray = new Tray('image.ico');
// //     // tray.setToolTip("Tray to electron app");
// //     // tray.on('click', () => {
        
// //     //     win.isVisible()?win.hide():win.show();
// //     // })
    
    
// //     // app.whenReady().then(createWindow);
// // })

// // app.on('closed', () => {
// //     e => e.preventDefault();
// // })

// app.whenReady()
// .then(createWindow);





let window;
let isQuiting;
let tray;

app.on('before-quit', function () {
  isQuiting = true;
});

// app.on('window-all-closed', (e) => {
//     e.preventDefault();
//     // window.getWindowObject;
// })

app.on('ready', () => {
    tray = new Tray('image.ico');
    tray.setToolTip("Tray to electron app");
    tray.on('click', () => {
        window.isVisible()?window.hide():window.show();
    })
  tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: 'Show App', click: function () {
        window.show();
      }
    },
    {
      label: 'Quit', click: function () {
        isQuiting = true;
        BrowserWindow.closable = true;
        app.quit();
      }
    }
  ]));

  window = new BrowserWindow({
    width: 850,
    height: 450,
    icon: __dirname+"image.ico",
    // show: false,
    autoHideMenuBar: false,
    webPreferences: {
        nodeIntegration: true
    },
    // followWindow: false
    // frame: false,
    closable: false,
    // fullscreen: true,
    // titleBarStyle: 'hiddenInset'
    // titleBarStyle: 'hidden',
    // titleBarOverlay: true
  });
  window.loadURL("http://www.holmiumtechnologies.com/");
//   window.setWindowButtonVisibility(false)


})





