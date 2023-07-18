'use strict';

const path = require('path');

/**
 * 默认配置
 */
module.exports = (appInfo) => {

  const config = {};

  /**
   * 应用模式配置
   */
  config.developmentMode = {
    mode: {
      vue: {
        hostname: 'localhost',
        port: 33820
      },
    }
  };

  /**
   * 开发者工具
   */
  config.openDevTools = false;

  /**
   * 主窗口
   */
  config.windowsOption = {
    title: '壁纸工具',
    width: 1360,
    height: 768,
    minWidth: 800,
    minHeight: 650,
    webPreferences: {
      //webSecurity: false, // 跨域问题 -> 打开注释
      contextIsolation: false, // false -> 可在渲染进程中使用electron的api，true->需要bridge.js(contextBridge)
      nodeIntegration: true,
      //preload: path.join(appInfo.baseDir, 'preload', 'bridge.js'),
    },
    frame: false,
    show: false,
    icon: path.join(appInfo.home, 'public', 'images', 'logo-32.png'),
  };

  /**
   * ee框架日志
   */
  config.logger = {
    encoding: 'utf8',
    level: 'INFO',
    outputJSON: false,
    buffer: true,
    enablePerformanceTimer: false,
    rotator: 'day',
    appLogName: 'ee.log',
    coreLogName: 'ee-core.log',
    errorLogName: 'ee-error.log'
  }

  /**
   * 远程模式-web地址
   */
  config.remoteUrl = {
    enable: false,
  };

  /**
   * 主进程
   */
  config.mainServer = {
    protocol: 'file://',
    indexPath: '/public/dist/index.html',
    host: 'localhost',
    port: 33820,
  };

  /**
   * 硬件加速
   */
  config.hardGpu = {
    enable: true
  };

  /**
   * 异常捕获
   */
  config.exception = {
    mainExit: false,
    childExit: true,
    rendererExit: true,
  };

  /**
   * 插件功能
   */
  config.addons = {
    window: {
      enable: true,
    },
    tray: {
      enable: true,
      title: '壁纸工具',
      icon: '/public/images/tray.png'
    },
    security: {
      enable: true,
    },
    awaken: {
      enable: true,
      protocol: 'ee',
      args: []
    },
  };

  return {
    ...config
  };
}
