<template>
  <div class="home">
    <!-- banner -start -->
    <div class="banner">
      <div class="banner-content">
        <div class="banner-01">
          <img src="../assets/images/banner-01@2x.png" width="410" alt="">
        </div>
        <h3>Open Insurance Platform for the era of Open Finance</h3>
        <div class="banner-button">Join our waitlist</div>
        <div class="banner-img">
          <img src="../assets/images/banner-bg@2x.png" width="1000" alt="">
        </div>
      </div>
    </div>
    <!-- banner end -->
    <!-- content start -->
    <div class="contnet">
      <div class="pages-wrapper content-wrapper">
        <div class="content-item">
          <div class="img-box">
            <img src="../assets/images/content-01@2x.png" width="74" alt="">
          </div>
          <h2>Business</h2>
          <p>The product design meets the needs of users, and the claims mechanism guarantees full compensation.The product shares the compensation pool, and the compensation pool shares the product revenue.</p>
        </div>
        <div class="content-item">
          <div class="img-box">
            <img src="../assets/images/content-02@2x.png" width="98" alt="">
          </div>
          <h2>Liquidity backstop</h2>
          <p>NsureNetwork scales DeFi by acting as a proxy volatility fund, Providing support and protection for smart contracts and on-chain asset agreements.</p>
        </div>
        <div class="content-item">
          <div class="img-box">
            <img src="../assets/images/content-03@2x.png" width="78" alt="">
          </div>
          <h2>Governance</h2>
          <p>We wish to make NsureDAO as decentralized and trustless as possible,and aim to turn the protocol into a DAO over time, powered by the native token.</p>
        </div>
      </div>
    </div>
    <!-- content end -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
}
</script>

<style lang="less" scoped>
.home {
  .banner {
    color: rgba(255, 255, 255, 0.6);
    padding: 100px 0;
    background-color: #000;
    display: flex;
    justify-content: center;
    text-align: center;

    .banner-01 {
      margin-bottom: 24px;
    }

    .banner-button {
      width: 250px;
      height: 66px;
      line-height: 66px;
      text-align: center;
      cursor: pointer;
      color: #fff;
      font-size: 24px;
      background: url('../assets/images/button@2x.png') no-repeat;
      background-size: contain;
      display: inline-block;
      margin: 60px 0;
    }
  }

  .contnet {
    background-color: #fff;
    padding: 100px 0;
  }

  .content-wrapper {
    display: flex;
    justify-content: space-between;

    .content-item {
      flex: 1;
      margin: 0 24px;
      text-align: center;

      .img-box {
        height: 74px;
        line-height: 74px;
      }

      h2 {
        margin: 24px 0;
        font-size: 20px;
      }

      p {
        font-size: 14px;
        line-height: 2;
      }
    }
  }
}
</style>
