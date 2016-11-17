<template>
    <div class="m-shop">
         <div id="wrapper">
            <div id="scroller">
                shop
                <div v-if="checkStatus(1)">
                    v-if event
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Iscroll from 'iscroll'
import $ from 'jquery'

export default {
    data() {
       return {
           mathList: [{
               id: 1,
               name: '申花'
           }, {
               id: 2,
               name: '申花2'
           }]
       }
    },

    methods: {
        checkStatus(id) {
            return false;
        }
    },

    mounted: function(){
        console.log(this.$route);
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.m-shop {
    height: 100%; overflow:hidden; background-color: #fff;
    #wrapper{height:100%;}
    .titleP{
        height: 0.76rem; font-size:0.28rem; line-height:0.76rem;background:#fafafa;color: #596380;padding:0 10px;margin-top:10px;
    }
}
</style>