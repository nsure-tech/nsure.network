<template>
    <div class="header home">
        <div class="pages-wrapper header-wrapper">
            <div class="logon-wrapper" @click="home">
                <img src="@/assets/images/logo@2x.png" width="40" alt="">
                <span>Nsure.Network</span>
            </div>
            <div class="right-wrapper">
                <div class="right-list">
                    <div class="right-list-item">
                        <a href="/Nsure_WP_0.7.pdf" target="_blank" rel="">Whitepaper</a>
                    </div>
                    <div class="right-list-item">
                        <router-link to="/faq">FAQ</router-link>
                    </div>
                    <!-- <div class="right-list-item last">
                        <a href="https://buy.nsure.network/#/" class="last-item" rel="">Testnet</a>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        comments:{
        },
    data() {
        return {
            menuList: [{
                path: '/home',
                name: 'Home'
            },{
                path: '/insure',
                name: 'Insure'
            },{
                path: '/liquidity-mining',
                name: 'Liquidity Mining'
            },{
                path: '/stake-pool',
                name: 'Stake Pool'
            }]
        }
    },
    methods: {
        handle(item) {
            if (item.name === this.$route.name) {
                return
            }
            this.$router.push(item.path)
        },
        home() {
            this.$router.push('/')
        },
        goInsure() {
            this.$router.push('/insure')
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    height: 80px;
    font-weight: bold;
    background-color: #fff;

    &.home {
        background-color: #1B2532;
        padding: 0 20px;

        span {
            color: #fff;
        }

        .pages-wrapper {
            width: 100%;
        }
    }

    .header-wrapper {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logon-wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
            margin-right: 20px;
        }
    }

    .right-list {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        &-item {
            margin-left: 40px;
            font-size: 16px;

            a {
                color: #fff;
                cursor: pointer;
                text-decoration: none;
            }

            .last-item {
                display: block;
                cursor: pointer;
                width: 148px;
                height: 48px;
                line-height: 48px;
                text-align: center;
                background: url('../assets/images/button@2x.png') center center no-repeat;
                background-size: contain;
            }
        }
    }

    .nav-list {
        display: flex;

        li {
            font-size: 14px;
            margin-left: 20px;

            a {
                color: #000;
                text-decoration: none;

                &.router-link-active {
                    color: #00b984;
                }
            }
        }
    }
}
</style>
