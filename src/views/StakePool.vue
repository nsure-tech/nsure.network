<template>
  <div class="pages-wrapper stake-pool">
    <div class="content-top">
      <el-card class="box-card left-card">
        <div slot="header" class="card-header">
          <span>Your Holdings</span>
        </div>
        <ul class="ul-list">
          <li>
            <div class="item">
              <div class="left">Locked</div>
              <div class="right">
                <span>{{holdingsLocked}}</span>Nsure
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="left">Delegate</div>
              <div class="right">
                <span>{{delegate}}</span>Nsure
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="left">Reward</div>
              <div class="right">
                <span>{{reward}}</span>ETH
              </div>
            </div>
          </li>
        </ul>
        <div class="button-wrapper">
          <button class="button" @click="open('Stake')">Stake</button>
          <button class="button" @click="open('Withdraw')">Withdraw</button>
        </div>
      </el-card>

      <el-card class="box-card right-card">
        <div slot="header" class="clearfix">
          <span>Pool Locked Holdings</span>
        </div>
        <ul class="ul-list">
          <li>
            <div class="item">
              <div class="left">Nsure Supply</div>
              <div class="right">
                <span>{{avail}}</span>Nsure
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="left">Nsure Locked</div>
              <div class="right">
                <span>{{locked}}</span>Nsure
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="left">Pool Earnings</div>
              <div class="right">
                <span>{{earnings}}</span>ETH
              </div>
            </div>
          </li>
        </ul>
      </el-card>
    </div>
    <Dialog width="400px">
      <div slot="body" class="custom-dialog-body">
        <div class="img-box">
          <img src="../assets/images/icon-eth.png" width="38" alt="">
        </div>
        <div class="dice-name">Nsure</div>
        <div class="dice-input-box">
          <div class="input-box">
            <div class="max-box">Max</div>
            <input type="number" v-model="number" placeholder="Amount in Nsure">
          </div>
        </div>
      </div>
      <div slot="footer">
        <button class="button close" @click="close">Close</button>
        <button class="button" v-if="dialogData.type === 'Stake'" @click="sumbit">Stake</button>
        <button class="button" v-if="dialogData.type === 'Withdraw'">Withdraw</button>
      </div>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'StakePool',
  data() {
    return {
        dialogData: {
            type: '',
            max: 0
        },
        number: '',
        holdingsLocked: 0,
        delegate: 0,
        reward: 0,
        avail: 0,
        locked: 0,
        earnings: 0
    }
  },
  components: {
    Dialog,
  },
  computed: {
    ...mapState(['balance', 'web3'])
  },
  mounted() {
    this.getDividends()
    this.holdings()
  },
  methods: {
    ...mapMutations(['UPDATE_DIALOG_VISBLE']),
    ...mapActions(['getDividends', 'setApprove', 'pool', 'getPoolBalances', 'getInvestorInfo', 'shareOf', 'submitWithdrawProposal']),
    open(type) {
      let max = 0
      this.number = ''
      if (type === 'Stake') {
          max = this.balance
      } else {
          max = 10
      }
      this.dialogData = {
          type,
          max,
      }
      this.UPDATE_DIALOG_VISBLE(true)
    },
    close() {
      this.UPDATE_DIALOG_VISBLE(false)
      this.number = ''
      this.dialogData = {
        type: '',
        max: 0
      }
    },
    async holdings() {
      try{
        const poolRes = await this.pool()
        console.log(poolRes)
        this.avail = this.web3.utils.fromWei(poolRes.avail)
        this.locked = this.web3.utils.fromWei(poolRes.locked)

        const getPoolBalancesRes = await this.getPoolBalances()
        this.earnings = this.web3.utils.fromWei(getPoolBalancesRes[0])

        const getInvestorInfoRes = await this.getInvestorInfo()
        this.holdingsLocked = this.web3.utils.fromWei(getInvestorInfoRes.withdrawal)
        this.delegate = this.web3.utils.fromWei(getInvestorInfoRes.invest)

        const shareOfRes = await this.shareOf()
        const scale = this.web3.utils.fromWei(shareOfRes[0]) / this.web3.utils.fromWei(shareOfRes[1])
        this.reward = this.earnings * scale
      }catch(e){
        console.log(e)
      }
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
      try {
        this.UPDATE_DIALOG_VISBLE(false)
        if (this.dialogData.type === 'Stake') {
          await this.setApprove(value)
          this.close()
        } else if (this.dialogData.type === 'Withdraw') {
          await this.submitWithdrawProposal(value)
          this.close()
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.stake-pool {
  padding: 48px 0;

  .content-top {
    display: flex;
    justify-content: space-between;

    .button-wrapper {
      margin-top: 40px;
      display: flex;
      justify-content: center;
    }

    .ul-list {
      li {
        border-bottom: 1px solid #F5F6F7;

        .item {
          color: #000;
          height: 56px;
          line-height: 56px;
          font-size: 20px;
          display: flex;
          justify-content: space-between;
          span {
            margin-right: 10px;
            
          }
        }
      }
    }
  }
}
</style>
