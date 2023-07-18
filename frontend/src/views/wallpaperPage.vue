<template>
    <div class="wallpaperPageContent" @scroll="handleScroll($event)">
        <a-list :grid="{ xs: 1, sm: 1, md: 1, lg: 2, xl: 3, xxl: 4 }" :data-source="wallpaperData">
            <a-list-item slot="renderItem" slot-scope="item, index">
                <div class="table_item" @click="wallpaperShow(item)">
                    <img class="pic" :src="item.url">
                </div>
            </a-list-item>
        </a-list>
        <wallpaper-show v-if="wallpaperShowData.isShow" @cloneWallpaper="cloneWallpaper"
                        :params="wallpaperShowData.params"/>
    </div>
</template>

<script>
import {getWallpaper} from "@/api/360Wallpaper.js";
import wallpaperShow from "@/views/components/wallpaperShow";
import {deepClone} from "@/utils/common";

export default {
    name: "wallpaperPage",
    components: {
        wallpaperShow
    },
    watch: {
        '$route.query.categoryId'(to, form) {
            this.categoryId = to
            this.pageCurrent = 1
            this.pageSize = 20
            this.wallpaperData = []
            this.getWallpaperData()
        }
    },
    created() {
        if (this.$route.query.categoryId === undefined) return
        this.categoryId = this.$route.query.categoryId
        this.getWallpaperData()
    },
    data() {
        return {
            categoryId: undefined,
            wallpaperData: [],
            pageCurrent: 1,
            pageSize: 20,
            wallpaperShowData: {
                isShow: false,
                params: undefined
            }
        }
    },
    methods: {
        handleScroll(e) {
            let scrollBottom =
                e.target.scrollHeight -
                e.target.scrollTop -
                e.target.clientHeight;

            if (scrollBottom < 400) {
                this.pageCurrent = this.pageCurrent + 1
                this.getWallpaperData();
            }
        },
        getWallpaperData() {
            let params = {
                cid: this.categoryId,
                start: this.pageCurrent * this.pageSize - this.pageSize,
                count: this.pageSize
            }
            getWallpaper(params).then(res => {
                if (res.data) {
                    res.data.forEach(item => {
                        this.wallpaperData.push(item);
                    })
                }
            })
        },
        wallpaperShow(item) {
            console.log(item)
            this.wallpaperShowData.params = deepClone(item);
            this.wallpaperShowData.isShow = true;
        },
        cloneWallpaper() {
            this.wallpaperShowData.params = undefined;
            this.wallpaperShowData.isShow = false;
        },
    }
}
</script>

<style lang="less" scoped>

.wallpaperPageContent {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}

.table_item {
  margin: 10px;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;


  .pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
}
</style>
