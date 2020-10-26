<template>
  <div class="home">
    <!-- banner -start -->

    <Poster/>
    <div class="banner">
      <div class="banner-content">
        <div class="banner-content-item banner-content-item-left">
          <div class="banner-des-box">
            <h1>Open Insurance Platform for Open Finance</h1>
            <h3>Create an insurance market to trade risk</h3>
            <div class="banner-button-wrapper">
              <!-- <div class="banner-button">
                <a href="https://form.typeform.com/to/t61JRnFA" target="_blank" rel="">Join Waitlist</a>
              </div> -->
              <div class="banner-button">
                <a href="https://buy.nsure.network/#/">MVP on Rinkeby</a>
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
              <h3>Capital Mining</h3>
              <p>Provide capital to back insurance risks in the capital pool, or purchase insurance covers to obtain NSURE tokens. NSURE are minted and automatically awarded on every block.</p>
              <div class="img-box">
                <img src="../assets/images/content-img-01@2x.png" alt="">
              </div>
            </div>
          </el-card>
        </div>
        <div class="content-item">
          <el-card class="box-card">
            <div class="content-item-box">
              <h3>Open Market to Trade Risk</h3>
              <p>Nsure.Network is a permissionless platform for whoever wants to purchase a cover. Capital providers can utilize NSURE to stake on specific insurance risks to obtain daily insurance premiums. Leverage staking is available for non-correlated insurance products.</p>
              <div class="img-box">
                <img src="../assets/images/content-img-02@2x.png" alt="">
              </div>
            </div>
          </el-card>
        </div>
        <div class="content-item">
          <el-card class="box-card">
             <div class="content-item-box">
              <h3>Dynamic Pricing and Capital Management</h3>
              <p>Pricing is determined by real-time supply of capital and demand of insurance coverage for the products. The capital model ensures that valid claims will always be paid and that systematic risk is under control.</p>
              <div class="img-box">
                <img src="../assets/images/content-img-03@2x.png" alt="">
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <!-- content end -->

    <div class="we-do-wrapper">
      <div class="pages-wrapper we-do-content">
        <h1>Nsure.Network Roadmap</h1>
        <div class="we-do-list-wrapper">
          <ul class="we-do-list">
            <li v-for="(roadmapItem, index) in roadmap" :key="index">
              <div class="title">{{roadmapItem.time}}</div>
              <ul class="we-do-item-list">
                <li v-for="item in roadmapItem.list" :key="item">{{item}}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- team start -->
    <div class="team-wrapper">
      <div class="title">Team</div>
      <div class="pages-wrapper team-content">
        <ul class="team-content-list">
          <li v-for="(item, index) in team" :key="index">
            <div class="list-item">
              <el-card class="box-card">
                <div class="content-item-box">
                  <h3>{{item.name}}</h3>
                  <h4>{{item.job}}</h4>
                  <div class="banner-des-box">
                    <p v-for="des in item.introduction" :key="des">{{des}}</p>
                  </div>
                  <!-- <p>{{item.}}</p>                   -->
                </div>
              </el-card>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- team end -->

    <mechanism/>

    <!-- footer end -->
  </div>
</template>

<script>
  import Poster from '../components/Poster'
  import mechanism from '../components/mechanism'

  export default {
  name: 'Home',
    components:{
      Poster,
      mechanism
    },
  data() {
    return {
      tips: 'Beware of Any Scam Attempts. $NSURE token has not been deployed yet. Any pools found are impersonations and SCAM ATTEMPTS. Do not engage with such.',
      roadmap: [
        {
          time: '2020Q1',
          list: ['Whitepaper V0.1 release']
        },
        {
          time: '2020Q3',
          list: ['MVP', 'Liquidity Bootstrapping']
        },
        {
          time: '2020Q4',
          list: ['Alpha release: Capital Mining; Cover purchasing; Leveraged Staking; Claim payment']
        },
        {
          time: '2021Q1',
          list: ['Mainnet V1.0 release']
        },
        {
          time: '2021Q2',
          list: ['Nsure DAO support; Community governance']
        },
        {
          time: '2021Q3',
          list: ['Boostrap on multichain ecosystem; e.g. Polkadot']
        },
        {
          time: '2021Q4',
          list: ['Developing strategies to deliver greater returns to Nsure holders']
        },
      ],
      team: [
        {
          name: 'Jeff Ren',
          job: 'Management & Research',
          introduction: [
            'M.Sc in Management.',
            'M.Sc in Coastal Engineering.',
            'Previously with Chainfunder Capital as Investment Director & Researcher.',
            'Research about blockchain protocols and ecosystems since 2017. Has been developing for Hurricane surge model for NOAA(US National Oceanic and Atmospheric Administration).'
          ]
        },
        {
          name: 'Alex Peng',
          job: 'Insurance Model Design & Actuarial Analysis',
          introduction: [
            'Master’s Degree in Financial Engineering.',
            '10 years insurance professional in AON with extensive experience in Actuarial Analysis, Insurance Linked Securities structuring and Reinsurance broker. ',
            'Expert in Financial Modeling and Quantit-ative Analytics.'
          ]
        },
        {
          name: 'Leafan Chan',
          job: 'Lead Developer',
          introduction: [
            'Project Management Professional (PMP) certificate',
            'Expert in Project Management, smart contracts and public blockchain development.',
            '10 years’ C++/Golang relevant working experience, and more than 3 years blockchain experiences, formerly lead Sangfor’s cyber security team of 40+ devs.'
          ]
        },
        {
          name: 'Alvaro Fernandez',
          job: 'Strategy & Growth',
          introduction: [
            'Majored in Economics & Finance. ',
            'Developed his carreer in Venture Capital space. Previously Vice President and Managing Director for Europe at JRR Group. prior to that Investment & Incubation Manager at ChainFunder. Provided strategic consulting, including DBS Singapore & Italian Undersecretary of State for the Ministry of Economic Development.'
          ]
        },
        {
          name: 'Jessie Wang',
          job: 'Insurance Model Design & Communication',
          introduction: [
            'Majored in Actuarial Science, achieved certified actuary credential (FCAS).',
            'Previously with Allianz as Product Manager for more than 2 years, in charge of insurance products for Hong Kong and Singapore markets. Prior to that, worked in Aon Analytic Team for around 3 years with extensive experience in actuarial and catastrophe analysis.'
          ]
        },
        {
          name: 'Vincent Bauwens',
          job: 'Marketing',
          introduction: [
            'Msc. in Finance and Business Engineering.',
            'Co-Founder of several companies and ecommerce brands.Currently managing a marketing agency. 5+ years of experience in marketing & business development and early stage investments in the blockchain industry.'
          ]
        },
        {
          name: 'Gary Lattanzi',
          job: 'Partnerships & Operations',
          introduction: [
            'Majored in International Business Trading and Development.',
            'Developed his carreer in Venture Capital space as analyst for different token funds. Currently in the AI*blockchain intersection doing Crypto Data Analytics. Provided strategic consulting, including HTF startups, web3  & Italian Undersecretary of State for the Ministry of Economic Development.'
          ]
        },
        {
          name: 'Anne Shuai',
          job: 'UI Designer',
          introduction: [
            'Previously in charge of UI designs for Palm Entertainment Xuan Dong Information Technology Co., Ltd., HeShuai has spent her past years providing and managing UI design features for tech companies and digital applications.',
          ]
        },
        {
          name: 'Aaron Fang',
          job: 'Full-Stack Developer',
          introduction: [
            'Mastered in Golang Language, Proficient in JS TS Dart OC, deep understanding of MCV, MVVM, KVO. ',
            'Previously engaged with development of blockchain wallets, exchanges and cross-platform development. Past experience includes mid- and back-end development of IM social software in Javascript iOS for large IT companies.'
          ]
        },

      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  .tips {
    background: #fff;

    &-wrapper {
      width: 1184px;
      margin: 0 auto;
      padding: 20px 0;

      p {
        color: red;
        font-size: 14px;
        line-height: 14px;
      }
    }
  }
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
          font-size: 14px;
          line-height: 1.5;
        }
      }

    }
  }

  .we-do-wrapper {
    color: #fff;
    padding: 80px 0;
    background-color: #00111b;

    .we-do-content {
      h1, h2 {
        text-align: center;
        margin-bottom: 40px;
      }
      h2 {
        color: #13c7fd;
        margin: 30px 0 40px;
      }

      .we-do-list-wrapper {
        display: flex;
        justify-content: center;
      }
      .we-do-list {
        width: 40%;

        .title {
          color: #13c7fd;
          padding-left: 42px;
        }

        .we-do-item-list {
          padding: 8px 0 28px 60px;
          margin: 10px 0 0 8px;
          border-left: 2px solid #13c7fd;

          >li {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 15px;
            list-style-type: disc;
          }
        }
      }
    }
  }

  .team-wrapper {
    padding: 50px 0;

    .title {
      font-size: 34px;
      text-align: center;
      padding-bottom: 40px;
      font-weight: bold;

    }
    .team-content-list {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 33.33%;
        .list-item {
          padding: 0 10px;

          .content-item-box {
            min-height: 300px;
            padding: 30px 10px 10px;

            h3 {
              color: #1B2532;
              font-size: 20px;
              line-height: 1.5;
              margin-bottom: 10px;
            }

            h4 {
              color: #1B2532;
              opacity: 0.6;
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 20px;
            }

            p {
              color: #1B2532;
              opacity: 0.5;
              font-size: 14px;
              line-height: 1.5;
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }

}
</style>
