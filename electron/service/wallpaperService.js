'use strict';

const {Service} = require('ee-core');
const {app: electronApp, shell, nativeImage} = require('electron');
const fs = require('fs');
const path = require('path');
const http = require('http');
const Ps = require("ee-core/ps");
const eis = require("ee-core/utils/is");
const UtilsHelper = require("ee-core/utils/helper");
const {exec} = require('child_process');

class WallpaperService extends Service {

    constructor(ctx) {
        super(ctx);
    }

    /**
     * 打开
     * @param args 路径
     */
    openPath(args) {
        shell.openPath(args);
    }

    /**
     * 获取下载目录
     */
    getDownloadPath() {
        const execDir = Ps.getExecDir();
        const isPackaged = Ps.isPackaged();
        let dir = '';
        if (isPackaged) {
            dir = path.join(execDir, "resources", "wallpaperData");
            if (eis.macOS()) {
                dir = path.join(execDir, "..", "Resources", "wallpaperData");
            }
        } else {
            dir = path.join(execDir, "wallpaperData");
        }
        UtilsHelper.mkdir(dir);
        return dir;
    }

    /**
     * 下载壁纸
     * @param args
     * @returns {{msg: string, code: number, data: string}}
     */
    downloadWallpaper(args) {
        let resultPath = path.join(args.downloadPath, args.downloadUrl.substring(args.downloadUrl.lastIndexOf('/') + 1));
        let result = {
            code: 200,
            msg: '下载成功',
            data: resultPath
        };
        const file = fs.createWriteStream(resultPath);
        http.get(args.downloadUrl, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
            });
        }).on('error', (error) => {
            result.code = 500
            result.msg = '下载失败';
        });
        return result;
    }

    /**
     * 更换壁纸
     * @returns {{msg: string, code: number}}
     */
    replaceWallpaper(args) {
        let result = {
            code: 200,
            msg: '设置成功'
        };

        if (eis.macOS()) {
            result = {
                code: 500,
                msg: '抱歉，目前仅支持设置Windows系统桌面壁纸'
            }
        } else {
            const scriptPath = path.join(Ps.getExtraResourcesDir(), 'setWallpaper.ps1');
            const command = `powershell -ExecutionPolicy Bypass -File "${scriptPath}" -imagePath "${args}"`;
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error setting wallpaper: ${error.message}`);
                    return;
                }
                console.log('Wallpaper set successfully!');
            });
        }
        return result;
    }
}

WallpaperService.toString = () => '[class WallpaperService]';
module.exports = WallpaperService;
