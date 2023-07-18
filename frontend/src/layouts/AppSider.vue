<template>
    <div class="height_100">
        <app-header/>
        <a-layout id="app-layout-sider">
            <a-layout-sider
                    class="layout-sider"
            >
                <a-menu class="menu-item" theme="light" mode="inline" :defaultSelectedKeys="[menuCurrentKey]"
                        @click="menuHandle">
                    <a-menu-item v-for="(menuInfo, index) in menu" :key="index" :defaultOpen="false">
                        {{ menuInfo.title }}
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-content class="layout-content">
                    <router-view/>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
import AppHeader from "@/layouts/AppHeader.vue";
import {getCategory} from "@/api/360Wallpaper.js";

export default {
    name: 'AppSider',
    components: {AppHeader},
    data() {
        return {
            menuCurrentKey: 0,
            menu: [
                {
                    id: 0,
                    title: '首页',
                    pageName: 'HomeIndex',
                    params: {
                        categoryId: 0
                    },
                }
            ]
        };
    },
    created() {
        this.menuCurrentKey = this.getMenuCurrentKey(0);
        getCategory().then(res => {
            let data = res.data
            console.log(data)
            for (let d in data) {
                let item = data[d]
                if (item.id == 1) continue;
                this.menu.push({
                    id: item.id,
                    title: item.name,
                    pageName: 'WallPaperIndex',
                    params: {
                        categoryId: item.id
                    }
                })
            }
        })
    },
    mounted() {
        this.menuHandle();
    },
    computed: {
        getMenuCurrentKey() {
            return function (key) {
                let nKey = this.$cookies.get('MenuCurrentKey');
                if (!nKey || nKey === 'null' || nKey === '') {
                    nKey = 0;
                }
                if (key !== undefined) {
                    nKey = key;
                }
                this.$cookies.set('MenuCurrentKey', nKey, "1h");
                return Number(nKey);
            }
        }
    },
    methods: {
        menuHandle(e) {
            this.menuCurrentKey = this.getMenuCurrentKey(e ? e.key : undefined);
            const linkInfo = this.menu[this.menuCurrentKey]
            if (linkInfo && linkInfo.params.categoryId !== undefined) {
                this.$router.push({name: linkInfo.pageName, query: linkInfo.params})
            }
        },
    },
};
</script>
<style lang="less" scoped>
.height_100 {
  height: 100%;
}

#app-layout-sider {
  height: calc(100% - 50px);

  .ant-menu-inline .ant-menu-item {
    margin: 0;
  }

  .layout-sider {
    width: 200px !important;
    max-width: 200px !important;
    min-width: 200px !important;
    height: 100%;
    background: #0f1522 !important;
    overflow: hidden;
    overflow-y: auto;
  }

  .menu-item {
    width: 84%;
    border-right: 0;
    background: #0f1522;

    .ant-menu-item {
      color: #FFFFFFD5;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
      border-radius: 2px;
      margin-left: 15px;
      padding-left: 50px;
      background: #FFFFFF0B !important;
    }

    .ant-menu-item-selected {
      background: #FFFFFF13 !important;
    }
  }

  .layout-content {
    height: 100%;
    background: #161c2e;
    padding: 10px;
  }
}

.ant-menu-inline .ant-menu-item::after {
  border-right: 3px solid #bbbbbb;
}

::-webkit-scrollbar {
  width: 0px;
}
</style>
