<!-- 搜索页-搜索历史 -->
<template>
    <div class="searchHistory" v-if="searchHistory.length">
        <span class="left">历史</span>
        <div class="list">
            <span
                class="item"
                v-for="(item, id) in searchHistory"
                :key="id"
                @click="search(item)"
            >
                {{ item }}
            </span>
        </div>
        <div class="right" @click="deleteSearchHistory()">
            <span class="iconfont icon-shanchu1"></span>
        </div>
    </div>
</template>

<script>
import { computed, onActivated } from "vue";
import { useStore } from "vuex";
import { Dialog } from "vant";

export default {
    name: "SearchHistory",
    setup(props, { emit }) {
        const store = useStore();

        const search = (searchWord) => {
            emit("search", searchWord);
        };

        // 删除搜索历史
        const deleteSearchHistory = () => {
            Dialog.confirm({
                message: "确定清除全部历史记录？",
            })
                .then(() => {
                    localStorage.removeItem("searchHistory");
                    store.commit("search/setSearchHistory", []);
                })
                .catch(() => {});
        };

        onActivated(() => {
            if (localStorage.getItem("searchHistory")) {
                store.state.isSearchHistoryShow = true;
                store.commit(
                    "search/setSearchHistory",
                    JSON.parse(localStorage.getItem("searchHistory"))
                );
            } else {
                store.state.isSearchHistoryShow = false;
            }
        });

        return {
            deleteSearchHistory,
            search,
            searchHistory: computed(() => store.state.search.searchHistory),
        };
    },
};
</script>

<style scoped lang='scss'>
.searchHistory {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        font-size: 12px;
    }
    .list {
        overflow-x: auto;
        white-space: nowrap;
        display: -webkit-box;
        -webkit-overflow-scrolling: touch;
        position: absolute;
        top: 54%;
        left: 0;
        transform: translateY(-50%);
        width: 82%;
        height: 32px;
        line-height: 32px;
        margin-left: 34px;
        .item {
            margin-right: 10px;
            padding: 4px 10px;
            background-color: rgba($color: #e6e6e6, $alpha: 1);
            border-radius: 12px;
        }
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .right {
        .iconfont {
            color: rgb(151, 151, 151);
            font-size: 12px;
        }
    }
}
</style>
