<!-- 搜索歌单-->
<template>
    <div class="searchPlayList">
        <TitleBar>
            <template v-slot:left>
                <div class="left">
                    <span class="titleName">歌单</span>
                </div>
            </template>
        </TitleBar>
        <div class="list">
            <router-link
                class="item"
                v-for="(item, id) in list"
                :key="id"
                :to="{
                    path: '/playlist',
                    query: { id: item.id },
                }"
            >
                <div class="left">
                    <img v-lazy="item.coverImgUrl" />
                </div>
                <div class="right">
                    <span class="title">{{ item.name }}</span>
                    <div class="bottom">
                        <span class="trackCount">
                            {{ item.trackCount }}首，by
                        </span>
                        <span class="nickname" v-if="item.creator">
                            {{ item.creator.nickname }}，</span
                        >
                        <span class="playCount"
                            >播放{{ changeValue(item.playCount) }}次</span
                        >
                    </div>
                </div>
            </router-link>
        </div>
        <div class="more">
            <span>{{ moreText }}</span>
            <div>
                <span class="iconfont icon-youjiantou"></span>
            </div>
        </div>
    </div>
</template>

<script>
import TitleBar from "@/components/TitleBar.vue";
import { watch, reactive, toRefs } from "vue";
import { changeValue } from "@/utils/index.js";

export default {
    name: "SearchSingle",
    components: { TitleBar },
    props: ["data"],
    setup(props) {
        const state = reactive({
            list: [],
            moreText: "",
        });

        watch(
            () => props.data,
            (newValue) => {
                state.list = newValue.playLists;
                state.moreText = newValue.moreText;
            }
        );

        return { ...toRefs(state), changeValue };
    },
};
</script>

<style scoped lang='scss'>
.searchPlayList {
    margin-bottom: 14px;
    background-color: $color-white-background;
    border-radius: 10px;
    .titleBar {
        font-size: 16px;
    }
    .list {
        padding: 0 $padding;
        .item {
            display: flex;
            align-items: center;
            margin-bottom: 14px;
            .left {
                margin-right: 10px;
                img {
                    display: block;
                    width: 60px;
                    border-radius: 10px;
                }
            }
            .right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 74%;
                .title {
                    @include ellipsis1();
                    margin-bottom: 6px;
                    font-size: 16px;
                }
                .bottom {
                    @include ellipsis1();
                    color: grey;
                    font-size: 10px;
                }
            }
        }
    }
    .more {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 0;
        border-top: 1px solid rgba(228, 228, 228, 0.5);
        color: grey;
        font-size: 12px;
        .iconfont {
            font-size: 14px;
        }
    }
}
</style>