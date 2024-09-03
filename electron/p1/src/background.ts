// src/background.ts

import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";

let mainWindow: BrowserWindow | null;

async function createWindow(): Promise<void> {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 如果有 preload 脚本
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // 加载应用的 index.html 文件
  mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));

  // 打开开发者工具
  mainWindow.webContents.openDevTools();

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    mainWindow.loadURL("app://./index.html");
  }

  // 当窗口关闭时触发
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用
app.on('ready', createWindow);

// 当所有窗口关闭时退出应用
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户按下 Cmd + Q 显式退出，否则应用和菜单栏会保持激活
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // 在 macOS 上，当点击 dock 图标并且没有其他窗口打开时，重新创建一个窗口
  if (mainWindow === null) {
    createWindow();
  }
});
