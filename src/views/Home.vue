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
                  <span>0</span>
                </li>
                <li>
                  <span>Earned：</span>
                  <span>0</span>
                </li>
              </ul>
              <ul class="content-list" v-else>
                <li>
                  <span>Tolal Reward：</span>
                  <span>0</span>
                </li>
                <li>
                  <span>Earned：</span>
                  <span>0</span>
                </li>
              </ul>
            </div>
            <div class="button-wrapper">
              <button class="button" @click="open">Withdraw</button>
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
            <input type="number" v-model="number" placeholder="Amount in Nsure">
          </div>
        </div>
      </div>
      <div slot="footer">
        <button class="button close" @click="close">Close</button>
        <button class="button" v-if="type === 'ETH'" @click="sumbit('ETH')">Withdraw</button>
        <button class="button" v-if="type === 'NSURE'" @click="sumbit('NSURE')">Withdraw</button>
      </div>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
import { mapMutations } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      type: 'ETH',
      number: ''
    }
  },
  components: {
    Dialog
  },
  methods: {
    ...mapMutations(['UPDATE_DIALOG_VISBLE']),
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
    sumbit() {}
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
    }

    .home-card-item {
      padding-top: 24px;
    }
  }
}
</style>
