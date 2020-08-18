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
                            <h3>Expected ETH</h3>
                            <h2>{{eth.avail}}/{{eth.locked}}</h2>
                            <h4>Deposit ETH Earn Nsure</h4>

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
                            <h3>Expected USDT</h3>
                            <h2>N/A</h2>
                            <h4>Deposit USDT Earn Nsure</h4>

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
                                <img src="../assets/images/icon3@2x.png" width="80" alt="">
                            </div>
                            <h3>Expected YCRV</h3>
                            <h2>N/A</h2>
                            <h4>Deposit YCRV Earn Nsure</h4>

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
                                <img src="../assets/images/icon4@2x.png" width="80" alt="">
                            </div>
                            <h3>Expected AMPL</h3>
                            <h2>N/A</h2>
                            <h4>Deposit AMPL Earn Nsure</h4>

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
                            <h3>Expected DAI</h3>
                            <h2>N/A</h2>
                            <h4>Deposit DAI Earn Nsure</h4>

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
                                <img src="../assets/images/icon6@2x.png" width="80" alt="">
                            </div>
                            <h3>Expected USDC</h3>
                            <h2>N/A</h2>
                            <h4>Deposit USDC Earn Nsure</h4>

                            <div class="liqudity-button">
                                <button class="button disabled">Withdraw</button>
                                <button class="button disabled">Deposit</button>
                            </div>
                        </div>
                    </el-card>
                </li>
            </ul>
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
                max: 0
            }
        }
    },
    components: {
        Dialog,
    },
    computed: {
        ...mapState(['balance', 'web3'])
    },
    mounted() {
        this.getEthPool()
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
            if (num > this.dialogData.max) {
                this.$message.error('Excess balance')
                console.log('超出余额')
                return
            }
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
                this.eth.max = this.web3.utils.fromWei(InsuranceProviderPoolInfo.avail)
                console.log('InsuranceProviderPoolInfo', InsuranceProviderPoolInfo, this.eth.max)
            }catch(e){
                //TODO handle the exception
            }
        },
        close() {
            this.UPDATE_DIALOG_VISBLE(false)
            this.number = ''
            this.dialogData = {
                type: '',
                max: 0
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

            li {
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

                    .icon-content {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        margin-bottom: 18px;
                    }

                    .liqudity-button {
                        display: flex;
                        font-size: 14px;
                        padding: 40px 0 20px;
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
}
</style>
