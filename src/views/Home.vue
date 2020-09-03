<template>
  <div class="home">
    <!-- banner -start -->
    <div class="banner">
      <div class="banner-content">
        <div class="banner-content-item banner-content-item-left">
          <div class="banner-des-box"> 
            <h1>Open Insurance Platform for the era of Open Finance</h1>
            <h3>create a market to trade risk</h3>
            <div class="banner-button-wrapper">
              <div class="banner-button">
                <a href="https://form.typeform.com/to/t61JRnFA" target="_blank" rel="">Join waitlist</a>
              </div>
              <div class="banner-button">
                <a href="https://buy.nsure.network/#/">Test our MVP</a>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-content-item banner-content-item-right">
          <div class="banner-img">
            <img src="../assets/images/banner-bg-2@2x.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- banner end -->
    <!-- content start -->
    <div class="contnet">
      <div class="pages-wrapper content-wrapper">
        <div class="content-item">
          <el-card class="box-card">
            <div class="content-item-box">
              <h3>Liquidity Mining</h3>
              <p>By providing capital liquidity to back Nsure network Nsure tokens are minted and issued accordingly. Policyholders can also share part of the minted tokens.</p>
              <div class="img-box">
                <img src="../assets/images/content-img-01@2x.png" alt="">
              </div>
            </div>
          </el-card>
        </div>
        <div class="content-item">
          <el-card class="box-card">
            <div class="content-item-box">
              <h3>Market to Trade Risk</h3>
              <p>Nsure tokens could be used to stake on the risks they are comfortable, insurance premiums are paid daily, all Nsure tokens are benefit from the system and leverage provided.</p>
              <div class="img-box">
                <img src="../assets/images/content-img-02@2x.png" alt="">
              </div>
            </div>
          </el-card>
        </div>
        <div class="content-item">
          <el-card class="box-card">
             <div class="content-item-box">
              <h3>Dynamic Pricing & Capital Management</h3>
              <p>Pricing is determined by real-time supply and demand, capital model is used to ensure claims will be paid and systematic risk is under control.</p>
              <div class="img-box">
                <img src="../assets/images/content-img-03@2x.png" alt="">
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <!-- content end -->

    <!-- footer start -->
    <div class="footer">
      <div class="pages-wrapper footer-wrapper">
        <div class="left">
          <div class="logon-wrapper">
            <img src="@/assets/images/logo@2x.png" width="40" alt="">
            <span>Nsure.Network</span>
          </div>
        </div>
        <div class="right footer-right">
          <div class="footer-right-item">
            <div class="footer-title">SOCIAL</div>
            <ul class="footer-right-item-list">
              <li>
                <img src="../assets/images/twiiter@2x.png" width="16" alt=""> Twitter: 
                <a href="https://twitter.com/Nsure_network" target="_blank" rel="">https://twitter.com/Nsure_network</a>
              </li>
              <li>
                <img src="../assets/images/discord@2x.png" width="16" alt=""> Discord: 
                <a href="https://discord.com/invite/nSvAapa" target="_blank" rel="">https://discord.com/invite/nSvAapa</a>
              </li>
              <li>
                <img src="../assets/images/telegram@2x.png" width="16" alt=""> Telegram: 
                <a href="https://t.me/nsurenet" target="_blank" rel="">https://t.me/nsurenet</a>
              </li>
            </ul>
          </div>
          <div class="footer-right-item">
            <div class="footer-title">CONTACT</div>
            <ul class="footer-right-item-list">
              <li>
                contact@Nsure.network
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- footer end -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goInsure() {
      // this.$router.push('/insure')
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  .banner {
    color: rgba(255, 255, 255, 0.6);
    padding: 120px 0;
    background-color: #1B2532;
    display: flex;
    justify-content: center;
    text-align: center;

    &-content {
      width: 100%;
      display: flex;
      justify-content: space-between;

      &-item-left {
        width: 60%;

        .banner-des-box {
          text-align: left;
          padding: 0 100px;

          h1 {
            color: #fff;
            font-size: 46px;
            line-height: 1.2;
          }

          h3 {
            color: #fff;
            font-size: 32px;
            line-height: 1.2;
            opacity: 0.4;
            margin-top: 30px;
            font-weight: normal;
          }

          .banner-button-wrapper {
            margin-top: 120px;
            display: flex;

            .banner-button {
              color: #fff;
              cursor: pointer;
              width: 190px;
              height: 52px;
              font-size: 18px;
              line-height: 50px;
              text-align: center;
              border-radius: 5px;
              border: 1px solid #fff;
              margin-right: 24px;

              a {
                color: #fff;
                text-decoration: none;
              }

              &:hover {
                color: #1DBF92;
                border: 1px solid #1DBF92;

                a {
                  color: #1DBF92;
                }
              }
            }
          }
        }
      }
      &-item-right {
        width: 40%;

        .banner-img {
          img {
            width: 100%;
            max-width: 586px;
          }
        }
      }
    }
  }

  .contnet {
    background-color: #F5F6F7;
    padding: 100px 0;
  }

  .content-wrapper {
    display: flex;
    justify-content: space-between;

    .content-item {
      width: 400px;

      .content-item-box {
        height: 430px;
        padding: 30px 10px 10px;
        position: relative;

        .img-box {
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 0;
  
          img {
            width: 240px;
          }
        }

        h3 {
          color: #1B2532;
          font-size: 20px;
          line-height: 1.5;
          margin-bottom: 20px;
        }
  
        p {
          color: #1B2532;
          opacity: 0.4;
          font-size: 16px;
          line-height: 1.5;
        }
      }

    }
  }

  .footer {
    color: #fff;
    background-color: #1B2532;
    .footer-wrapper {
      display: flex;
      justify-content: space-between;
      padding: 80px 0 100px;

      .logon-wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
            margin-right: 20px;
        }
      }

      .footer-right {
        display: flex;

        &-item {
          margin-left: 40px;

          .footer-title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 15px;
          }

          &-list {
            font-size: 14px;
            li {
              margin-bottom: 15px;

              img {
                float: left;
                margin: 2px 10px 0 0;
              }

              a {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
