<template>
    <div id="app" class="g-body">
        <loading-com :is-loading="isLoading"></loading-com>
        <header-com></header-com>
        <div class="g-main">
            <keep-alive>
                <router-view transition="fade" transition-mode="out-in"></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
import progress from 'vue-progressbar/vue-progressbar.vue'
import HeaderCom from '../common/HeaderCom'
import LoadingCom from '../common/LoadingCom'

export default {
        data() {
            return {
                // 是否显示加载
                isLoading: false
            }
        },

        components: {
            HeaderCom,
            LoadingCom
        },

        // 在创建实例时 `events` 选项简单地调用 `$on`
        events: {
            'root-toggle-loading': function (isShow) {
              // alert(JSON.stringify(isShow));
              // 事件回调内的 `this` 自动绑定到注册它的实例上
              this.isLoading = isShow;
            }
        },

        created () {
            console.log('APP.vue');
            console.log(this);
        }

}
</script>
<style lang="sass">
html,
body {
    height: 100%;
}
.g-body {
    height: 100%;
    position: relative;
    overflow: hidden;
    .g-main {
        position: absolute;
        top: 44px;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
    }
}
.fade-transition {
    transition: all .2s ease;
    opacity: 1;
}

.fade-enter {
    opacity: 1;
}

.fade-leave {
    opacity: 0;
}
</style>
