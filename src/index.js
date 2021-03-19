const { 
  app, BrowserWindow, TouchBar, nativeImage
} = require('electron');
const path = require('path');
const { TouchBarButton } = TouchBar;

// const touchBar = new TouchBar({
//   items: [],
// });

let counter = 0;

const image = nativeImage.createFromPath('./m.png').resize({ height: 30 });

const update = () => {
  counter += 1;
  button.label = `Count: ${counter}`; 
}

const button = new TouchBarButton({
  label: `Count: ${counter}`,
  accessibilityLabel: 'Counter',
  backgroundColor: '#6ab04c',
  click: () => {
    update();
  }
});

const button2 = new TouchBarButton({
  icon: image,
  iconPosition: 'left',
  label: `Greetings, I am surfbot.`,
  accessibilityLabel: 'Button looking like a label',
  backgroundColor: '#000',
  click: () => {
    mainWindow.loadURL('https://www.surfline.com/')
  }
});

const bowls = new TouchBarButton({
  label: `BOW`,
  accessibilityLabel: 'Counter',
  backgroundColor: '#6ab04c',
  click: () => {
    update();
  }
});

const inbetweens1 = new TouchBarButton({
  label: `INB`,
  accessibilityLabel: 'Counter',
  backgroundColor: '#6ab04c',
  click: () => {
    update();
  }
});

const rockpiles = new TouchBarButton({
  label: `ROC`,
  accessibilityLabel: 'Counter',
  backgroundColor: '#6ab04c',
  click: () => {
    update();
  }
});

const inbetweens2 = new TouchBarButton({
  label: `INB`,
  accessibilityLabel: 'Counter',
  backgroundColor: '#6ab04c',
  click: () => {
    update();
  }
});

const kaisers = new TouchBarButton({
  label: `KAI`,
  accessibilityLabel: 'Counter',
  backgroundColor: '#6ab04c',
  click: () => {
    update();
  }
});

const fours = new TouchBarButton({
  label: `FOU`,
  accessibilityLabel: 'Counter',
  backgroundColor: '#6ab04c',
  click: () => {
    update();
  }
});

const paradise = new TouchBarButton({
  label: `PAR`,
  accessibilityLabel: 'Counter',
  backgroundColor: '#6ab04c',
  click: () => {
    update();
  }
});

const populars = new TouchBarButton({
  label: `POP`,
  accessibilityLabel: 'Counter',
  backgroundColor: '#6ab04c',
  click: () => {
    update();
  }
});

const canoes = new TouchBarButton({
  label: `CAN`,
  accessibilityLabel: 'Counter',
  backgroundColor: '#6ab04c',
  click: () => {
    update();
  }
});

const queens = new TouchBarButton({
  label: `QUE`,
  accessibilityLabel: 'Counter',
  backgroundColor: '#6ab04c',
  click: () => {
    update();
  }
});

const touchBar = new TouchBar({
  items: [
    button,
    button2,
    bowls,
    inbetweens1,
    rockpiles,
    inbetweens2,
    kaisers,
    fours,
    paradise,
    populars,
    canoes,
    queens,
  ]
});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  
  mainWindow.setTouchBar(touchBar); 
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
