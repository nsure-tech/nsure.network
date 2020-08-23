<template>
    <div class="header">
        <div class="pages-wrapper header-wrapper">
            <div class="logon-wrapper" @click="home">
                <img src="@/assets/images/logo@2x.png" width="40" alt="">
                <span>Nsure.Network</span>
            </div>
            <div class="right-wrapper">
                <ul class="nav-list">
                    <li>
                        <router-link to="/home">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/insure">Insure</router-link>
                    </li>
                    <li>
                        <router-link to="/liquidity-mining">Liquidity Mining</router-link>
                    </li>
                    <li>
                        <router-link to="/stake-pool">Staking Dashboard</router-link>
                    </li>
                    <li>
                        <a href="https://github.com/nsure-tech/" target="_blank" rel="">Github</a>
                    </li>
                    <!-- <li>Purchase Cover</li>
                    <li>Liquidity Mining</li>
                    <li>Reward Dashboard</li>
                    <li>Purchase Record </li>
                    <li>Staking Dashboard</li>
                    <li>Github</li> -->
                </ul>
                <!-- <el-dropdown>
                    <span class="el-dropdown-link menu-item">
                        {{$route.name}}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(list, index) in menuList" :key="index" @click.native="handle(list)">{{list.name}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    height: 80px;
    background-color: #fff;

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
.menu-item {
    color: #000;
    cursor: pointer;
}
</style>
