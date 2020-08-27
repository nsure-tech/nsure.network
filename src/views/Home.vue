<template>
  <div class="pages-wrapper home">
    <div class="home-content">
      <div class="home-content-item">
        <el-card class="box-card">
          <div class="home-card-item">
            <div class="home-button">
              <span :class="{active: type === 'ETH'}" @click="handle('ETH')">Capital reward(eth)</span>
              <span :class="{active: type === 'NSURE'}" @click="handle('NSURE')">Liquidity mining reward(nsure)</span>
            </div>
            <div class="home-card-content">
              <ul class="content-list" v-if="type === 'ETH'">
                <li>
                  <span>Tolal Reward：</span>
                  <span>{{eth.tolalReward}}</span>
                </li>
                <li>
                  <span>Earned：</span>
                  <span>{{eth.earned}}</span>
                </li>
              </ul>
              <ul class="content-list" v-else>
                <li>
                  <span>Tolal Reward：</span>
                  <span>{{nsure.tolalReward}}</span>
                </li>
                <li>
                  <span>Earned：</span>
                  <span>{{nsure.earned}}</span>
                </li>
              </ul>
            </div>
            <div class="button-wrapper">
              <button class="button" @click="open">Withdraw</button>
            </div>
          </div>
        </el-card>
      </div>
      <div class="home-content-item">
        <el-card class="box-card">
          <div class="home-card-item">
              <div slot="header" class="card-header">
                <span>Withdraw History</span>
              </div>
              <div class="histpry-table home-history">
                <table>
                    <tr>
                        <th>Amount</th>
                        <th>Tx hash</th>
                    </tr>
                    <tr v-for="(item, index) in historyList" :key="index">
                        <td>{{item.amount}}</td>
                        <td>{{item.address}}</td>
                    </tr>
                </table>
                <div class="no-data" v-if="historyList.length === 0">No Data</div>
            </div>
          </div>
        </el-card>
      </div>
    </div>

    <Dialog width="400px">
      <div slot="body" class="custom-dialog-body">
        <template v-if="type === 'ETH'">
          <div class="img-box">
            <img src="../assets/images/icon-eth.png" width="38" alt="">
          </div>
          <div class="dice-name">ETH</div>
        </template>
        <template v-if="type === 'NSURE'">
          <div class="img-box">
            <img src="../assets/images/logo@2x.png" width="38" alt="">
          </div>
          <div class="dice-name">Nsure</div>
        </template>
        <div class="dice-input-box">
          <div class="input-box">
            <!-- <div class="max-box">Max</div> -->
            <input type="number" v-model="number" v-if="type === 'ETH'" placeholder="Amount">
            <p v-if="type === 'NSURE'" class="withdraw-all">Withdraw all</p>
          </div>
        </div>
      </div>
      <div slot="footer">
        <button class="button close" @click="close">Close</button>
        <button class="button" v-if="type === 'ETH'" @click="sumbit()">Withdraw</button>
        <button class="button" v-if="type === 'NSURE'" @click="doMakerWithdraw">Withdraw</button>
      </div>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
import { mapState, mapMutations, mapActions } from 'vuex'
import { nsrToken } from '@/config'
export default {
  name: 'Home',
  data() {
    return {
      type: 'ETH',
      number: '',
      eth: {
        tolalReward: 0,
        earned: 0
      },
      nsure: {
        tolalReward: 0,
        earned: 0
      },
      page: 1,
      historyList: []
    }
  },
  watch: {
    type(value) {
      if (value === 'ETH') {
        this.getTakerBalanceOf()
      } else {
        this.getMakerBalanceOf()
      }
    }
  },
  components: {
    Dialog
  },
  computed: {
    ...mapState(['balance', 'web3', 'account'])
  },
  mounted() {
    this.getTakerBalanceOf()
    this.getMakerBalanceOf()
    this.getRecords()
  },
  methods: {
    ...mapMutations(['UPDATE_DIALOG_VISBLE']),
    ...mapActions(['takerBalanceOf', 'makerBalanceOf', 'takerWithdraw', 'makerWithdraw']),
    handle(type) {
      this.type = type
    },
    open() {
      this.UPDATE_DIALOG_VISBLE(true)
    },
    close() {
      this.number = ''
      this.UPDATE_DIALOG_VISBLE(false)
    },
    async getTakerBalanceOf() {
      try{
        const tolalReward = await this.takerBalanceOf()
        const earned = await this.takerBalanceOf(nsrToken)
        this.eth.tolalReward = this.web3.utils.fromWei(tolalReward)
        this.eth.earned = this.web3.utils.fromWei(earned)
      }catch(e){
        console.log(e)
      }
    },
    async getMakerBalanceOf() {
      try{
        const tolalReward = await this.makerBalanceOf()
        const earned = await this.makerBalanceOf(nsrToken)
        this.nsure.tolalReward = this.web3.utils.fromWei(tolalReward)
        this.nsure.earned = this.web3.utils.fromWei(earned)
      }catch(e){
        console.log(e)
      }
    },
    async sumbit() {
      try{
        const num = Number(this.number)
        if (this.number == '' || num === 0) {
          this.$message.error('Please enter number frist')
          return
        }
        if (num < 0) {
          this.$message.error('Must be greater than 0')
          return
        }
        const value = this.web3.utils.toWei(num.toString())
        await this.takerWithdraw(value)
      }catch(e){
        console.log(e)
      }
    },
    async doMakerWithdraw () {
      try{
        await this.makerWithdraw() 
      }catch(e){
        console.log(e)
      }
    },
    async getRecords() {
      try{
          const params = {
              address: this.account, // acount
              tran_type: 2,
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
.home {
  padding: 48px 0;

  .home-content {
    display: flex;
    justify-content: center;

    &-item {
      width: 50%;
      margin: 0 10px;

      .home-button {
        display: flex;
        justify-content: center;

        span {
          display: block;
          width: 260px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 25px;
          font-size: 16px;
          margin: 0 12px;
          cursor: pointer;
          font-weight: bold;
          box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.09),6px 6px 26px 0px rgba(255,255,255,0.5);

          &.active {
            box-shadow: inset 0px 2px 15px 0px rgba(0,0,0,0.09),6px 6px 26px 0px rgba(255,255,255,0.5);
          }
        }
      }

      .home-card-content {
        padding: 50px 0;
        .content-list {
          padding: 0 50px;
          li {
            display: flex;
            font-size: 20px;
            margin-bottom: 24px;
            justify-content: space-between;

            span {
              opacity: 0.6;

              &:last-child {
                opacity: 1;
              }
            }
          }
        }
      }

      .button-wrapper {
        display: flex;
        padding-bottom: 12px;
        justify-content: center;
        button {
          width: 400px;
          border-radius: 22px;
        }
      }
    }

    .box-card {
      border-radius: 30px;
      margin: 0;
      height: 320px;
      padding-bottom: 24px;
    }

    .home-card-item {
      padding-top: 24px;
    }
  }
}

.withdraw-all {
  text-align: left;
  line-height: 40px;
  opacity: 0.6;
}

.home-history {
  margin-top: 10px;
  max-height: 246px;
  overflow-y: auto;
  th,
  td {
    text-align: left;
    &:last-child {
      text-align: right;
    }
  }
}
</style>
