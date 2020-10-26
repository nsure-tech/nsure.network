<template>
    <div class="we-do-wrapper">
        <div class="pages-wrapper we-do-content">
            <h1>Our Partners</h1>

            <ul>
                <li v-for="(item, index) in imagesList" :key="index">
                    <a :href=item.url target="_Blank">
                        <img :src=item.img alt="">
                    </a>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    const based = require('../assets/images/based.png');
    const genblock = require('../assets/images/genblock.png');
    const mechanism = require('../assets/images/mechanism.png');
    const au21 = require('../assets/images/au21.png');
    const signal = require('../assets/images/signal.png');
    const commas = require('../assets/images/3commas.png');
    const caballeros = require('../assets/images/caballeros.png');
    export default {
        name: "mechanism",
        data() {
            return {
                imagesList: [
                    {
                        url:'https://based.ventures',
                        img:based,
                    },
                    {
                        url:'https://mechanism.capital',
                        img:mechanism,
                    },
                    {
                        url:'https://genblock.capital',
                        img:genblock,
                    },

                    {
                        url:'https://au21.capital',
                        img:au21,
                    },
                    {
                        url:'https://Signal.vc',
                        img:signal,
                    },
                    {
                        url:'https://3commas.io',
                        img:commas,
                    },
                    {
                        url:'http://caballeroscapital.com',
                        img:caballeros,
                    },
                    // mechanism,
                    // genblock,
                    // au21,
                    // signal,
                    // commas,
                    // caballeros,
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .we-do-wrapper {
        background-color: #00111b;
h1{
    text-align: center;
}
        ul {
            display: flex;
            flex-wrap:wrap;
            justify-content: space-between;
            li {
                width: 32%;
                margin-top: 39px;
                img {
                    width: 100%;
                    display: block;
                }
            }
        }
    }
</style>
