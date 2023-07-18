'use strict';

const {Controller} = require('ee-core');
const Services = require("ee-core/services");

class AppController extends Controller {
    constructor(ctx) {
        super(ctx);
    }

    /**
     * 窗口最小化
     */
    minimize() {
        Services.get('appService').minimize();
    }

    /**
     * 窗口最大化
     */
    maximize() {
        Services.get('appService').maximize();
    }

    /**
     * 结束程序
     */
    closeApp() {
        Services.get('appService').closeApp();
    }

}

AppController.toString = () => '[class AppController]';
module.exports = AppController;
