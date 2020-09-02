<template>
    <div class="pages-wrapper insure">
        <div class="card-wrapper">
            <el-card class="box-card left-card">
                <div slot="header" class="card-header">
                    <span>Details</span>
                </div>
                <div class="description mb-20">
                    <p>Choose a smart contract to cover</p>
                </div>

                <div class="icon-wrapper">
                    <ul class="icon-list-wrapper">
                        <li v-for="(item, index) in productList" :key="index">
                            <div class="img-box" @click="getProductItem(item, index)" :class="{'active': activeIndex === index}">
                                <img :src="item.logo" alt="">
                            </div>
                        </li>
                        <li>
                            <div class="img-box disabled">
                                <img src="../assets/images/logo1@2x.png" alt="">
                            </div>
                        </li>
                        <li>
                            <div class="img-box disabled">
                                <img src="../assets/images/logo2@2x.png" alt="">
                            </div>
                        </li>
                        <li>
                            <div class="img-box disabled">
                                <img src="../assets/images/logo4@2x.png" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
            </el-card>

            <el-card class="box-card right-card">
                <div slot="header" class="clearfix">
                    <span></span>
                </div>

                <div class="input-wrapper">
                    <el-card class="box-card min-card">
                        <div slot="header" class="clearfix">
                            <span>Smart Contract address</span>
                        </div>
                        <div class="input-content max">
                            <div class="addr" v-if="productAddr">{{productAddr}}</div>
                            <!-- <div class="addr addr-empty" v-else>Enter Address</div> -->
                        </div>
                    </el-card>
                </div>
            </el-card>
        </div>

        <div class="card-wrapper">
            <el-card class="box-card left-card">
                <div slot="header" class="card-header">
                    <span>Cover Amount</span>
                </div>
                <div class="description height-80">
                    <p>The amount you will receive in the event of a valid claim as a fixed-sum payout.</p>
                </div>

                <div class="input-wrapper">
                    <el-card class="box-card min-card">
                        <div slot="header" class="clearfix">
                            <span>Amount</span>
                        </div>
                        <div class="input-content">
                            <input type="number" v-model="amount" placeholder="0">
                            <span>ETH</span>
                        </div>
                    </el-card>
                </div>
            </el-card>

            <el-card class="box-card right-card">
                <div slot="header" class="clearfix">
                    <span>Cover period</span>
                </div>
                <div class="description height-80">
                    <p>Enter the length of time you want to be covered forCover is live immediately from the purchasetransaction confirmation.</p>
                </div>

                <div class="input-wrapper">
                    <el-card class="box-card min-card">
                        <div slot="header" class="clearfix">
                            <span>Period</span>
                        </div>
                        <div class="input-content">
                            <input type="number" v-model="days" placeholder="0">
                            <span>DAYS</span>
                        </div>
                    </el-card>
                </div>
            </el-card>
        </div>

        <div class="confirm-wrapper">
            <button class="button" @click="showDiaglog">confirm</button>
        </div>

        <div class="history-active">
            <span :class="{ active: active }" @click="historyActive(1)">Transaction Record</span>
            <span :class="{ active: !active }"  @click="historyActive(0)">My transaction</span>
        </div>
        <div class="history-wrapper">
            <el-card class="box-card">
                <div slot="header" class="card-header">
                    <span>History</span>
                </div>
                <div class="histpry-table" v-if="active">
                    <table>
                        <tr>
                            <th>Product Name</th>
                            <th>Cover Amount</th>
                            <th>Cover Period</th>
                            <th>Tx hash</th>
                            <th>Time</th>
                        </tr>
                        <tr v-for="(item, index) in historyList" :key="index">
                            <td>{{item.record_sn}}</td>
                            <td>{{item.amount}}</td>
                            <td>{{item.provider_id}}</td>
                            <td>{{item.address}}</td>
                            <td>{{item.create_time}}</td>
                        </tr>
                    </table>
                    <div class="no-data" v-if="historyList.length === 0">No Data</div>
                </div>
                <div class="histpry-table" v-else>
                    <table>
                        <tr>
                            <th>Product Name</th>
                            <th>Cover Amount</th>
                            <th>Cover Period</th>
                            <th>Tx hash</th>
                            <th>Time</th>
                        </tr>
                        <!-- <tr v-for="(item, index) in historyList" :key="index">
                            <td>{{item.record_sn}}</td>
                            <td>{{item.amount}}</td>
                            <td>{{item.provider_id}}</td>
                            <td>{{item.address}}</td>
                            <td>{{item.create_time}}</td>
                        </tr> -->
                    </table>
                    <div class="no-data">No Data</div>
                </div>
            </el-card>
        </div>

        <Dialog width="546px">
            <div slot="body" class="custom-dialog-body">
                <ul class="confirm-dialog-wrapper">
                    <li>
                        <div class="confirm-list-item">
                            <div class="title">Cost of Cover</div>
                            <div class="content">
                                <div class="content-item color-02D396">{{cost}}</div>
                                <div class="content-item">ETH</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="confirm-list-item">
                            <div class="title">Smart Contract Address</div>
                            <div class="content">
                                 <div class="content-item font-16">{{productAddr}}</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="confirm-list-item">
                            <div class="title">Fixed Payout</div>
                            <div class="content">
                                 <div class="content-item">{{amount}}</div>
                                 <div class="content-item fixed-payout">
                                    <span>ETH</span>
                                    <span class="min">Paid in ETH｜Current Value（$394.11）</span>
                                 </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="confirm-list-item">
                            <div class="title">Cover Period</div>
                            <div class="content">
                                 <div class="content-item">{{days}}</div>
                                 <div class="content-item">DAYS</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div slot="footer">
                <button class="button close" @click="UPDATE_DIALOG_VISBLE(false)">Close</button>
                <button class="button confirm-button" @click="sumbit">confirm</button>
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
            productList: [],
            daysBlocks: 5760,
            activeIndex: -1,
            productAddr: '',
            days: '',
            amount: '',
            feeRate: 0,
            page: 1,
            total: 0,
            active: 1,
            historyList: []
        }
    },
    components: {
        Dialog,
    },
    computed: {
        ...mapState(['web3', 'account']),
        blocks() {
            return Number(this.$math.format(this.$math.multiply(this.daysBlocks, Number(this.days)), {precision: 16, notation: 'fixed'}))
        },
        cost() {
            return Number(this.$math.format(this.$math.multiply(this.feeRate, this.blocks, Number(this.amount)), {precision: 16, notation: 'fixed'}))
        }
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        ...mapMutations(['UPDATE_DIALOG_VISBLE']),
        ...mapActions(['buyInsurance', 'getProduct', 'getProductList', 'getProviderList']),
        showDiaglog() {
            if (this.activeIndex === -1) {
                this.$message.error('Please select products first')
                return
            }
            if (this.productAddr == '') {
                this.$message.error('Please select products first')
                return
            }
            if (this.amount == '') {
                this.$message.error('Enter Amount')
                return
            }
            if (Number(this.amount) < Math.pow(10, -6)) {
                this.$message.error('Amount must more than 10e-6')
                return
            }
            if (this.days == '') {
                this.$message.error('Enter Days')
                return
            }
            if (this.cost === 0) {
                this.$message.error('Cost of Cover 0')
                return
            }
            this.UPDATE_DIALOG_VISBLE(true)
        },
        async sumbit() {
            const amount = Number(this.amount)
            let payload = {
                productAddr: this.productAddr,
                amount: this.web3.utils.toWei(this.amount),
                blocks: this.blocks
            }
            try{
                const res = await this.getProviderList({ page: 1 })
                console.log({res})
                console.log(this.cost)
                const providerList = res.data
                const newList = this.sortKey(providerList, "update_time");
                if (newList.length === 0) {
                    this.$message.error('Not enough')
                    return
                }

                let total = 0
                newList.forEach((item, index) => {
                    if (index < 3) {
                        total = total + item.total_amount
                    }
                })

                if (total < amount) {
                    this.$message.error('Not enough')
                    return
                }

                const ipAddrs = []
                const ipAmount = []
                let num = amount
                newList.forEach((item, index) => {
                    if (index < 3) {
                        if (num > 0) {
                            console.log(num <= item.total_amount)
                            if(num <= item.total_amount) {
                                ipAddrs.push(item.address)
                                ipAmount.push(this.web3.utils.toWei(num.toString()))
                                num = num - item.total_amount
                            } else {
                                ipAddrs.push(item.address)
                                ipAmount.push(this.web3.utils.toWei(item.total_amount.toString()))
                                num = num - item.total_amount
                            }
                        }
                    }
                })

                payload = {
                    ...payload,
                    ipAddrs,
                    ipAmount,
                    cost: this.web3.utils.toWei(this.cost.toString())
                }
                this.UPDATE_DIALOG_VISBLE(false)
                const result = await this.buyInsurance(payload)
                console.log(result)
            } catch (e) {
                throw Error(e)
            }
        },
        close() {
            this.activeIndex = -1
            this.productAddr = ''
            this.days = ''
            this.amount = ''
            this.feeRate = 0
        },
        sortKey(array, key) {
            return array.sort(function(a, b) {
                var x = a[key];
                var y = b[key];
                return x > y ? -1 : x < y ? 1 : 0;
            });
        },
        async getProductItem(item, index) {
            this.activeIndex = index
            const productAddr = item.address
            this.productAddr = productAddr
            this.getRecords()
            try {
                const result = await this.getProduct(productAddr)
                this.feeRate = this.$math.multiply(Number(result[1]), Math.pow(10, -18)) // -18
                console.log(result)
            } catch (e) {
                throw Error(e)
            }
        },
        async getProducts() {
            try{
                const res = await this.getProductList({ page: 1 })
                this.productList = res.data
            }catch(e){
                throw Error(e)
            }
        },
        historyActive(active) {
            this.active = active
            if (active) {
                this.getRecords()
            }
        },
        async getRecords() {
            try{
                const params = {
                    address: this.productAddr,
                    tran_type: 0,
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
.insure {
    padding: 48px 0;
}

.description {
    width: 50%;
    margin-bottom: 40px;

    p {
        font-size: 14px;
        line-height: 1.5;
        color: rgba(0, 0, 0, .6);
    }

    &.mb-20 {
        margin-bottom: 20px;
    }
}

.input-wrapper {
    padding: 0 40px;
}

.icon-wrapper {
    .icon-list-wrapper {
        display: flex;
        flex-wrap: wrap;
        li {
            width: 96px;
            margin-right: 10px;

            .img-box {
                width: 100px;
                height: 100px;
                border-radius: 10px;
                cursor: pointer;

                img {
                    display: block;
                    width: 100px;
                    height: 100px;
                }

                &:hover,
                &.active {
                    background-color: #F5F6F7;
                }

                &.disabled {
                    cursor: default;
                    filter: grayscale(100%);
                    filter: gray;
                    opacity: 0.5;

                    &:hover,
                    &.active {
                        background-color: #fff;
                    }
                }
            }
        }
    }
}

.min-card {
    .input-content {
        padding: 20px 0;
        display: flex;
        justify-content: space-between;

        input {
            width: 310px;
            border: none;
            font-size: 28px;
        }

        span {
            flex: 1;
            color: rgba(0, 0, 0, .6);
            text-align: right;
            font-size: 28px;
        }

        .addr {
            font-size: 16px;
            height: 20px;
            line-height: 20px;
        }

        .addr-empty {
            opacity: 0.6;
        }

        &.max {
            input {
                flex: 1;
            }
        }
    }
}

.confirm-wrapper {
    padding: 28px 0 20px;
    display: flex;
    justify-content: flex-end;

    button {
        margin: 0;
    }
}

.height-80 {
    height: 70px;
}

.confirm-button {
    width: 200px;
}

.color-02D396 {
    color: #02D396;
}

.font-16 {
    font-size: 16px;
}

.confirm-dialog-wrapper {
    li {
        color: #000;
        padding: 20px 0;
        border-bottom: 1px solid #F5F6F7;

        .confirm-list-item {
            .title {
                text-align: left;
                font-size: 14px;
                line-height: 1.5;
                margin-bottom: 10px;
            }

            .content {
                display: flex;
                font-size: 20px;
                line-height: 1.5;
                justify-content: space-between;

                .fixed-payout {
                    .min {
                        font-size: 14px;
                        margin-left: 40px;
                    }
                }
            }
        }
    }
}

.history-wrapper {
    .box-card {
        margin: 0;
    }
}

.history-active {
    padding: 10px 20px;
    display: flex;
    justify-content: center;

    span {
        display: block;
        width: 200px;
        height: 44px;
        font-size: 20px;
        line-height: 44px;
        cursor: pointer;
        text-align: center;
        background: #fff;
        border-radius: 5px;
        margin: 0 10px;
        opacity: 0.4;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

        &.active {
            opacity: 1;
        }
    }
}
</style>

