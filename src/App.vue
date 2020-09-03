<template>
  <div id="app">
    <Header />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/stake-pool">stake-pool</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
// import { mapActions } from "vuex";
// import Web3 from 'web3'
export default {
  components: {
    Header
  },
  // created() {
  //   window.addEventListener('load', async () => {
  //     // Modern dapp browsers...
  //     if (window.ethereum) {
  //         // eslint-disable-next-line no-undef
  //         window.web3 = new Web3(ethereum);
  //         try {
  //             // Request account access if needed
  //             // eslint-disable-next-line no-undef
  //             await ethereum.enable();
  //             // Acccounts now exposed
  //             // eslint-disable-next-line no-undef
  //             web3.eth.sendTransaction({/* ... */});
  //         } catch (error) {
  //             // User denied account access...
  //         }
  //     }
  //     // Legacy dapp browsers...
  //     else if (window.web3) {
  //         // eslint-disable-next-line no-undef
  //         window.web3 = new Web3(web3.currentProvider);
  //         // Acccounts always exposed
  //         // eslint-disable-next-line no-undef
  //         web3.eth.sendTransaction({/* ... */});
  //     }
  //     // Non-dapp browsers...
  //     else {
  //         console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  //     }
  //   });
  // },
  // mounted() {
  //   this.getAccounts()
  // },
  // methods: {
  //   ...mapActions(['getAccounts'])
  // }
}
</script>


<style lang="less">
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Microsoft YaHei, Apple Color Emoji, Segoe UI Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
.custom-dialog-body {
  text-align: center;
  font-size: 18px;
  color: #000;

  .dice-name {
    margin-top: 10px;
  }

  .dice-input-box {
    margin-top: 24px;
    height: 40px;
    display: flex;
    justify-content: center;

    .input-box {
      width: 198px;
      padding: 0 60px 0 10px;
      background-color: #F4F6F7;
      position: relative;

      input {
        display: block;
        width: 100%;
        height: 40px;
        border: none;
        font-size: 18px;
        background-color: #F4F6F7;
      }

      .max-box {
        width: 50px;
        height: 40px;
        line-height: 40px;
        background-color: #F4F6F7;
        cursor: pointer;
        font-weight: bold;
        text-align: center;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
      }
    }
  }
}
</style>

