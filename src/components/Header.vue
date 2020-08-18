<template>
    <div class="header">
        <div class="pages-wrapper header-wrapper">
            <div class="logon-wrapper" @click="home">
                <img src="@/assets/images/logo@2x.png" width="40" alt="">
                <span>Nsure.Network</span>
            </div>
            <div class="right-wrapper">
                <el-dropdown>
                    <span class="el-dropdown-link menu-item">
                        {{$route.name}}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(list, index) in menuList" :key="index" @click.native="handle(list)">{{list.name}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [{
                path: '/',
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
}
.menu-item {
    color: #000;
    cursor: pointer;
}
</style>
