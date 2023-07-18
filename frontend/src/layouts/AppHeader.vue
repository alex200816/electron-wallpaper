<template>
    <div class="app-header">
        <div class="logo_title">
            <img class="pic-logo" src="~@/assets/logo.svg">
            <span class="title">壁纸工具</span>
        </div>
        <div class="operate">
            <a-button type="link" class="operate_btn" @click="minimize()">
                <a-icon type="minus-circle" class="operate_icon"/>
            </a-button>
            <a-button type="link" class="operate_btn" @click="maximize()">
                <a-icon type="plus-circle" class="operate_icon"/>
            </a-button>
            <a-button type="link" class="operate_btn" @click="close()">
                <a-icon type="close-circle" class="operate_icon"/>
            </a-button>
        </div>
    </div>
</template>

<script>
import {ipcApiRoute} from "@/api/app";

export default {
    name: "AppHeader",
    methods: {
        minimize() {
            this.$ipc.invoke(ipcApiRoute.minimize);
        },
        maximize() {
            this.$ipc.invoke(ipcApiRoute.maximize);
        },
        close() {
            this.$ipc.invoke(ipcApiRoute.closeApp);
        },
    }
}
</script>

<style lang="less" scoped>
.app-header {
  -webkit-app-region: drag;
  height: 50px;
  background: #0f1522;
  display: flex;
  align-items: center;

  .logo_title {
    -webkit-app-region: none;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;

    .pic-logo {
      height: 30px;
      margin: 10px;
    }

    .title {
      font-size: 18px;
      font-weight: bold;
      color: #ffffff;
    }
  }

  .operate {
    -webkit-app-region: none;
    position: absolute;
    right: 10px;


    .operate_btn {
      padding: 5px;
      cursor: pointer;

      .operate_icon {
        font-size: 18px;
      }
    }

  }

}
</style>
