import request from '@/utils/request'


/**
 * 获取壁纸分类
 */
export function getCategory() {
    return request({
        url: 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAllCategories',
        method: 'GET'
    })
}


/**
 * 获取分类下的壁纸
 */
export function getWallpaper(params) {
    return request({
        url: 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory',
        method: 'GET',
        params
    })
}
