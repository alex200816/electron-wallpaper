'use strict';

const {dialog} = require('electron');
const {Controller} = require('ee-core');
const Services = require('ee-core/services');
const _ = require("lodash");

/**
 * 壁纸工具
 */
class WallpaperController extends Controller {
    constructor(ctx) {
        super(ctx);
    }

    /**
     * 打开文件夹
     */
    openPath(args) {
        Services.get('wallpaperService').openPath(args);
    }


    /**
     * 获取下载目录
     */
    getDownloadPath() {
        return Services.get('wallpaperService').getDownloadPath();
    }


    /**
     * 下载壁纸
     * @returns {Promise<void>}
     */
    downloadWallpaper(args) {
        let downloadPath = args.downloadPath;
        if (downloadPath === undefined) {
            const filePaths = dialog.showOpenDialogSync({
                properties: ['openDirectory', 'createDirectory']
            });

            if (_.isEmpty(filePaths)) {
                return null
            }

            downloadPath = filePaths[0];
        }

        return Services.get('wallpaperService').downloadWallpaper({
            downloadUrl: args.downloadUrl,
            downloadPath: downloadPath
        });
    }

    /**
     * 更换电脑壁纸
     * @param args
     * @returns {Promise<void>}
     */
    replaceWallpaper(args) {
        return Services.get('wallpaperService').replaceWallpaper(args);
    }


}

WallpaperController.toString = () => '[class WallpaperController]';
module.exports = WallpaperController;
