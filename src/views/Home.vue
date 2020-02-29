<template>
    <div class="home">
        <HeaderTop/>
        <Swiper/>
    </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper.vue'
import HeaderTop from '@/components/HeaderTop.vue'

export default {
    name: 'home',
    components: {
        HeaderTop,
        Swiper
    }
}
</script>
<style lang="scss" >
    html {
        font-size: 100px;
        body {
            font-size: .16rem;
        }
    }
</style>
