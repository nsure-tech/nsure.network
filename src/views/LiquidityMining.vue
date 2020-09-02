<template>
    <div class="pages-wrapper liqudity-mining">
        <div class="banner">
            <h2>Choose a cryptocurrency to start</h2>
            <h4>Mining Nsure by providing liquidity to the capital pool</h4>
        </div>

        <div class="liqudity-mining-content">
            <ul class="liqudity-mining-content-wrapper">
                <li>
                    <el-card class="box-card">
                        <div class="liqudity-mining-item">
                            <div class="icon-content">
                                <img src="../assets/images/icon1@2x.png" width="80" alt="">
                            </div>
                            <!-- <h3>Expected ETH</h3>
                            <h2>{{eth.avail}}</h2>
                            <h4>Deposit ETH Earn Nsure</h4> -->
                            <ul class="balance-list">
                                <li>
                                    <span>Pool balance: </span>
                                    <span>{{eth.avail}}</span>
                                </li>
                                <li>
                                    <span>Pool locked: </span>
                                    <span>{{eth.locked}}</span>
                                </li>
                                <li>
                                    <span>My balance: </span>
                                    <span>{{eth.myBalance}}</span>
                                </li>
                                <li>
                                    <span>My locked: </span>
                                    <span>{{eth.mylocked}}</span>
                                </li>
                            </ul>

                            <div class="liqudity-button">
                                <button class="button" @click="open('Withdraw')">Withdraw</button>
                                <button class="button" @click="open('Deposit')">Deposit</button>
                            </div>
                        </div>
                    </el-card>
                </li>
                <li>
                    <el-card class="box-card">
                        <div class="liqudity-mining-item">
                            <div class="icon-content">
                                <img src="../assets/images/icon2@2x.png" width="80" alt="">
                            </div>
                            <ul class="balance-list">
                                <li>
                                    <span>Pool balance: </span>
                                    <span>0</span>
                                </li>
                                <li>
                                    <span>Pool locked: </span>
                                    <span>0</span>
                                </li>
                                <li>
                                    <span>My balance: </span>
                                    <span>0</span>
                                </li>
                                <li>
                                    <span>My locked: </span>
                                    <span>0</span>
                                </li>
                            </ul>

                            <div class="liqudity-button">
                                <button class="button disabled">Withdraw</button>
                                <button class="button disabled">Deposit</button>
                            </div>
                        </div>
                    </el-card>
                </li>
                <li>
                    <el-card class="box-card">
                        <div class="liqudity-mining-item">
                            <div class="icon-content">
                                <img src="../assets/images/icon5@2x.png" width="80" alt="">
                            </div>
                            <ul class="balance-list">
                                <li>
                                    <span>Pool balance: </span>
                                    <span>0</span>
                                </li>
                                <li>
                                    <span>Pool locked: </span>
                                    <span>0</span>
                                </li>
                                <li>
                                    <span>My balance: </span>
                                    <span>0</span>
                                </li>
                                <li>
                                    <span>My locked: </span>
                                    <span>0</span>
                                </li>
                            </ul>

                            <div class="liqudity-button">
                                <button class="button disabled">Withdraw</button>
                                <button class="button disabled">Deposit</button>
                            </div>
                        </div>
                    </el-card>
                </li>
            </ul>
        </div>

        <div class="history-wrapper">
            <el-card class="box-card">
                <div slot="header" class="card-header">
                    <span>History</span>
                </div>
                <div class="histpry-table">
                    <table>
                        <tr>
                            <th>Time</th>
                            <th>Direction</th>
                            <th>Token Amount</th>
                            <th>Tx hash</th>
                        </tr>
                        <tr v-for="(item, index) in historyList" :key="index">
                            <td>{{item.create_time}}</td>
                            <td>{{item.desc}}</td>
                            <td>{{item.amount}}</td>
                            <td>{{item.address}}</td>
                        </tr>
                    </table>
                    <div class="no-data" v-if="historyList.length === 0">No Data</div>
                </div>
            </el-card>
        </div>
        <Dialog width="400px">
            <div slot="body" class="custom-dialog-body">
                <div class="img-box">
                    <img src="../assets/images/icon-eth.png" width="38" alt="">
                </div>
                <div class="dice-name">ETH</div>
                <div class="dice-input-box">
                <div class="input-box">
                    <div class="max-box" @click="getMax">Max</div>
                    <input type="number" v-model="number" placeholder="Amount in ETH">
                </div>
                </div>
            </div>
            <div slot="footer">
                <button class="button close" @click="close">Close</button>
                <button class="button" @click="sumbit" v-if="dialogData.type === 'Deposit'">Deposit</button>
                <button class="button" @click="sumbit" v-if="dialogData.type === 'Withdraw'">Withdraw</button>
            </div>
        </Dialog>
    </div>
</template>

<script>
import Dialog from '@/components/Dialog'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    data() {
        return {
            dialogData: {
                type: '',
                max: 0
            },
            number: '',
            eth: {
                avail: 0,
                locked: 0,
                max: 0,
                myBalance: 0,
                mylocked: 0,
            },
            historyList: []
        }
    },
    components: {
        Dialog,
    },
    computed: {
        ...mapState(['balance', 'web3', 'account'])
    },
    mounted() {
        this.getEthPool()
        this.getRecords()
    },
    methods: {
        ...mapMutations(['UPDATE_DIALOG_VISBLE']),
        ...mapActions(['addLiquidityEth', 'withdrawLiquidity', 'ethPool', 'InsuranceProviderPoolInfo']),
        getMax() { 
            this.number = this.dialogData.max
        },
        open(type) {
            let max = 0
            this.number = ''
            if (type === 'Deposit') {
                max = this.balance
            } else {
                max = this.eth.max
            }
            this.dialogData = {
                type,
                max,
            }
            this.UPDATE_DIALOG_VISBLE(true)
        },
        async sumbit() {
            const num = Number(this.number)
            if (num === 0) {
                console.log('等于0')
                this.$message.error('Please enter number frist')
                return
            }
            if (num < 0) {
                console.log('小于0')
                this.$message.error('Must be greater than 0')
                return
            }
            // if (num > this.dialogData.max) {
            //     this.$message.error('Excess balance')
            //     console.log('超出余额')
            //     return
            // }
            const value = this.web3.utils.toWei(num.toString())
            console.log({ value })
            try {
                this.UPDATE_DIALOG_VISBLE(false)
                if (this.dialogData.type === 'Deposit') {
                    await this.addLiquidityEth(value)
                    this.close()
                } else if (this.dialogData.type === 'Withdraw') {
                    await this.withdrawLiquidity(value)
                    this.close()
                }
            } catch (error) {
                throw Error(error)
            }
        },
        async getEthPool() {
            try{
                const res = await this.ethPool()
                this.eth.avail = this.web3.utils.fromWei(res.avail)
                this.eth.locked = this.web3.utils.fromWei(res.locked)

                const InsuranceProviderPoolInfo = await this.InsuranceProviderPoolInfo()
                console.log({InsuranceProviderPoolInfo})
                this.eth.max = this.web3.utils.fromWei(InsuranceProviderPoolInfo.avail)
                this.eth.myBalance = this.web3.utils.fromWei(InsuranceProviderPoolInfo.avail)
                this.eth.max = this.web3.utils.fromWei(InsuranceProviderPoolInfo.locked)
            } catch (error) {
                throw Error(error)
            }
        },
        close() {
            this.UPDATE_DIALOG_VISBLE(false)
            this.number = ''
            this.dialogData = {
                type: '',
                max: 0
            }
        },
        async getRecords() {
            try{
                const params = {
                    address: this.account, // acount
                    tran_type: 1,
                    record_type: 0,
                    page: this.page
                }
                const res = await this.$http.getRecords(params)
                this.historyList = res.data
                this.total = res.total
                console.log(res)
            }catch(e){
                throw Error(e)
            }
        }
    }
}
</script>

<style lang="less" scoped>
.liqudity-mining {
    padding: 48px 0;

    .banner {
        text-align: center;
        padding: 20px 0 60px;

        h2 {
            font-size: 44px;
            line-height: 1.2;
            margin-bottom: 14px;
        }

        h3 {
            font-size: 24px;
            line-height: 1.2;
        }
    }

    .liqudity-mining-content {
        display: flex;
        justify-content: center;
        &-wrapper {
            width: 960px;
            display: flex;
            flex-wrap: wrap;

            >li {
                width: 320px;
                margin: 24px 0;

                .box-card {
                    border-radius: 30px;
                }

                .liqudity-mining-item {
                    padding-top: 24px;
                    text-align: center;

                    h3 {
                        font-size: 16px;
                    }

                    h2 {
                        font-size: 26px;
                        padding: 10px 0;
                    }

                    h4 {
                        font-size: 14px;
                        font-weight: 500;
                        color: rgba(0, 0, 0, 0.6);
                    }

                    .balance-list {
                        padding: 0 10px;
                        li {
                            margin-bottom: 10px;
                            display: flex;
                            justify-content: space-between;
                        }
                    }

                    .icon-content {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        margin-bottom: 18px;
                    }

                    .liqudity-button {
                        display: flex;
                        font-size: 14px;
                        padding: 20px 0 20px;
                        justify-content: center;

                        button {
                            flex: 1;
                            margin: 0 5px;
                        }
                    }
                }

            }
        }
    }

    .history-wrapper {
        margin: 0 110px;

        .box-card {
            border-radius: 30px;
        }
    }
}
</style>
