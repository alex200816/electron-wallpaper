<template>
    <div>
        <div class="mask cursor_pointer" @click="cloneWallpaper()">
            <span>点击弹窗外关闭</span>
        </div>
        <div class="wallpaper_show_container">
            <div class="img_container cursor_pointer">
                <viewer :images="[params.url]"
                        @inited="inited"
                        class="viewer" ref="viewer"
                >
                    <template #default="scope">
                        <img v-for="src in scope.images" :src="src" :key="src">
                        {{ scope.options }}
                    </template>
                </viewer>
            </div>
            <div class="info_container">
                <div class="info">
                    <div class="info_item">
                        <span>标签：</span>
                        <a-space :size="5">
                            <a-tag color="#32658D" v-for="(tag, index) in params.tagList" :key="index">{{ tag }}</a-tag>
                        </a-space>
                    </div>
                    <div class="info_item">
                        <span>分辨率：</span>
                        <a-space :size="5">
                            <a-tag color="#32658D" class="cursor_pointer"
                                   v-for="(resolution, index) in params.resolutionList" :key="index"
                                   @click="toSwitchResolution(resolution.url)">{{ resolution.resolution }}
                            </a-tag>
                        </a-space>
                    </div>
                </div>
                <div class="info_operate">
                    <a-button type="primary" ghost block @click="downloadWallpaper()">下载</a-button>
                    <a-button type="primary" ghost block @click="replaceWallpaper()">设为壁纸</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import 'viewerjs/dist/viewer.css'
import {component as Viewer} from "v-viewer"
import {ipcApiRoute} from "@/api/wallpaper";

export default {
    name: "wallpaperShow",
    props: {
        params: {
            type: Object,
            default: undefined
        }
    },
    components: {
        Viewer
    },
    data() {
        return {
            wallpaperData: {},
            thisImgUrl: undefined
        }
    },
    created() {
        this.wallpaperData = this.params;
        this.initParams();
    },
    methods: {
        inited(viewer) {
            this.$viewer = viewer
        },
        toSwitchResolution(url) {
            this.params.url = url;
            this.thisImgUrl = url;
        },
        initParams() {
            let params = this.params;

            // 初始化标签集合
            if (params.utag) {
                let tagList = [];
                let tags = params.utag.split(' ');
                tags.forEach(item => {
                    if (item !== '') {
                        tagList.push(item);
                    }
                })
                this.params.tagList = tagList;
            }

            // 初始化像素集合
            this.thisImgUrl = params.url;
            let reslutionList = [{
                resolution: params.resolution,
                url: params.url
            }]
            for (let param in params) {
                if (param.indexOf("img_") == 0) {
                    let resolution = param.split("_");
                    reslutionList.push({
                        resolution: resolution[1] + "x" + resolution[2],
                        url: params[param]
                    })
                }
            }
            this.params.resolutionList = reslutionList;
        },
        downloadWallpaper() {
            let that = this;
            this.$ipc.invoke(ipcApiRoute.downloadWallpaper, {
                downloadUrl: that.thisImgUrl
            }).then(res => {
                if (res.code == 200) {
                    that.$message.info(res.msg, 2);
                    that.$ipc.invoke(ipcApiRoute.openPath, res.data);
                }
            })
        },
        replaceWallpaper() {
            let that = this;
            this.$ipc.invoke(ipcApiRoute.getDownloadPath).then(r1 => {
                this.$ipc.invoke(ipcApiRoute.downloadWallpaper, {
                    downloadUrl: that.thisImgUrl,
                    downloadPath: r1
                }).then(r2 => {
                    if (r2.code == 200) {
                        this.$ipc.invoke(ipcApiRoute.replaceWallpaper, r2.data).then(r3 => {
                            that.$message.info(r3.msg, 2);
                            console.log('replaceWallpaper:' + r3);
                        });
                    }
                })
            })
        },
        cloneWallpaper() {
            this.$emit("cloneWallpaper")
        },
    }
}
</script>

<style lang="less" scoped>
.mask {
  z-index: 999991;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(43, 51, 75, 0.52);

  span {
    color: #dadada;
    font-size: 16px;
    position: absolute;
    bottom: 30px;
    letter-spacing: 5px;
    text-shadow: 1px 1px 1px #000;
  }
}

.wallpaper_show_container {
  z-index: 999992;
  position: absolute;
  left: 20%;
  right: 20%;
  top: 20%;
  bottom: 20%;
  width: 60%;
  height: 60%;
  border-radius: 20px;
  background: #161c2e;
  display: flex;
  border: 1px solid #1a3465;


  .img_container {
    width: 100%;
    height: 100%;

    .viewer {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 90%;
        object-fit: contain;
      }
    }
  }

  .info_container {
    position: relative;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 20%;
    height: 100%;
    padding: 10px;
    background: #1f273f;

    .info {
      height: 80%;
      overflow: hidden;
      overflow-y: auto;
    }

    .info_item {
      color: #bebebe;
      text-align: left;

      span {
        margin-bottom: 5px;
        display: block;
      }

      .ant-space {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;

      }

      .ant-tag {
        margin-bottom: 10px;
      }
    }


    .info_operate {
      position: absolute;
      bottom: 20px;
      left: 10px;
      right: 10px;

      button {
        margin-top: 5px;
      }
    }
  }
}

.cursor_pointer {
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 0px;
}

</style>
