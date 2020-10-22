<template>
    <div class="poster">
        <h3>Join Liquidity Bootstrapping Pool (LBP) for Nsure</h3>
        <div class="center">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Poster"
    }
</script>

<style lang="less" scoped>
    .poster{
        height: 535px;
        background-image: url('../assets/images/poster_bg.jpg');
        background-color: #19264E;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3{
            color: white;
            font-size: 36px;
        }
        .center{
            height: 240px;
            width: 1157px;
            background-image: url("../assets/images/poster_cen.png");
            background-size: contain;
            background-position: center;
        }
    }
</style>
