<template>
    <div class="swiper">
        <div class="swiper-item">
            <img src="" alt="" class="swiper-item-img">
        </div>
    </div>
</template>

<script>
export default {
    name: 'swiper',
    props: {
        list: Array
    }
}
</script>

<style scoped="" lang="scss">
    .swiper {
        width: 100%;
        height: 40vw;
        background-color: #eeeeee;
        &-item {
            width: 100%;
            height: 100%;
            &-img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
