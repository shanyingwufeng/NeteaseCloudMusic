<!-- 首页新歌新碟数字专辑子组件 -->
<template>
    <div class="homeNewResourceItem">
        <div class="swiper-container homeNewResourceItem-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, id) in list" :key="id">
                    <div
                        class="item"
                        v-for="(sonItem, id) in item.resources"
                        :key="id"
                        @click="play(sonItem)"
                    >
                        <div class="image">
                            <img v-lazy="sonItem.uiElement.image.imageUrl" />
                        </div>
                        <div class="content">
                            <div class="top">
                                <span class="mainTitle">{{
                                    sonItem.uiElement.mainTitle.title
                                }}</span>
                                <span class="author"
                                    >-
                                    {{
                                        sonItem.resourceExtInfo.artists[0].name
                                    }}</span
                                >
                            </div>
                            <span class="subTitle">{{
                                sonItem.uiElement.subTitle.title
                                    ? sonItem.uiElement.subTitle.title
                                    : "..."
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onUpdated, watch } from "vue";
import { Swiper } from "swiper";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
    name: "HomeNewResourceItem",
    components: {},
    props: ["data"],
    setup(props) {
        const list = ref([]);

        const store = useStore();
        const router = useRouter();

        watch(
            () => props.data,
            (newValue) => {
                list.value = newValue;
            }
        );

        onUpdated(() => {
            new Swiper(".homeNewResourceItem-swiper", {
                slidesPerView: 1,
                spaceBetween: 14,
            });
        });

        const play = async (item) => {
            if (item.resourceType === "song") {
                store.commit("play/setPlayState", false);
                await store.dispatch("play/setPlaySongInfo", item.resourceId);
                store.commit("play/setPlayState", true);
            } else if (item.resourceType === "album") {
                router.push({
                    path: "/album",
                    query: { id: item.resourceId },
                });
            }
        };

        return { list, play };
    },
};
</script>

<style scoped lang='scss'>
.homeNewResourceItem {
    padding: $padding;
    padding-top: 8px;
    padding-right: 0;
    background-color: $color-white-background;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    .swiper-container {
        padding-right: 28px;
        .swiper-wrapper {
            display: flex;
            justify-content: space-between;
            .swiper-slide {
                position: relative;
                display: flex;
                flex-direction: column;
                .item {
                    display: flex;
                    align-items: center;
                    .image {
                        flex: 1;
                        img {
                            display: block;
                            width: 54px;
                            height: 54px;
                            margin-right: 10px;
                            border-radius: 10px;
                        }
                    }
                    .content {
                        flex: 8;
                        display: flex;
                        flex-direction: column;
                        padding: 16px 0;
                        padding-right: 14px;
                        border-bottom: 1px solid rgba(235, 234, 234, 0.5);
                        .top {
                            display: flex;
                            align-items: center;
                            margin-bottom: 4px;
                            .mainTitle {
                                @include ellipsis1();
                                margin-right: 4px;
                                font-size: 16px;
                            }
                            .author {
                                @include ellipsis1();
                                color: grey;
                                font-size: 12px;
                            }
                        }
                        .subTitle {
                            @include ellipsis1();
                            color: grey;
                            font-size: 12px;
                        }
                    }
                    &:last-child {
                        .content {
                            border-bottom: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>
