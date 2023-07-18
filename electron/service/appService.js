'use strict';

const {Service} = require('ee-core');
const CoreElectronWindow = require('ee-core/electron/window');

class AppService extends Service {
    constructor(ctx) {
        super(ctx);
    }

    /**
     * 窗口最小化
     */
    minimize() {
        CoreElectronWindow.getMainWindow().minimize();
    }

    /**
     * 窗口最大化
     */
    maximize() {
        if(CoreElectronWindow.getMainWindow().isMaximized()){
            CoreElectronWindow.getMainWindow().restore();
            return;
        }
        CoreElectronWindow.getMainWindow().maximize();
    }

    /**
     * 结束程序
     */
    closeApp() {
        this.app.appQuit();
    }


}

AppService.toString = () => '[class AppService]';
module.exports = AppService;
