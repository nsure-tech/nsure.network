<template>
  <div class="pages-wrapper home">
    <div class="home-content">
      <div class="home-content-item">
        <el-card class="box-card">
          <div class="home-card-item">
            <div class="home-button">
              <span :class="{active: active === 0}" @click="handle(0)">Insure Reward</span>
              <span :class="{active: active === 1}" @click="handle(1)">Liquidity Reward</span>
            </div>
            <div class="home-card-content">
              <ul class="content-list" v-if="!active">
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
              <button class="button">Withdraw</button>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      active: 0
    }
  },
  methods: {
    handle(value) {
      this.active = value
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

      .home-button {
        display: flex;
        justify-content: center;

        span {
          display: block;
          width: 228px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 25px;
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
