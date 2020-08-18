import Vue from 'vue'
import Vuex from 'vuex'
import Web3 from 'web3'
import erc20TokenContractAbi from 'human-standard-token-abi'
import { nsureToken, stakingToken, attToken } from '@/config'
const web3 = new Web3(Web3.givenProvider);

const nsureAbi = require('@/config/nsureAbi.json')
const stakingAbi = require('@/config/stakingAbi.json')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    web3,
    ethereum: window.ethereum || undefined,
    dialogVisible: false,
    account: '',
    balance: 0
  },
  mutations: {
    "UPDATE_DIALOG_VISBLE"(state, flag) {
      state.dialogVisible = flag
    },
    "SET_ACCOUNT"(state, value) {
      state.account = value
    },
    "SET_BALANCE"(state, value) {
      state.balance = value
    }
  },
  actions: {
    // 获取账户和余额
    async getAccounts({ state, commit }) {
      try {
        const { web3 } = state
        let account = ''
        let balance = 0

        // if (ethereum) {
        //   const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        //   if (accounts.length > 0) {
        //     account = accounts[0];
        //   }
        //   const balanceBigNumner = await ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] });
        //   balance = web3.utils.fromWei(balanceBigNumner)
        //   console.log(balance)
        // }

        const accounts = await web3.eth.getAccounts()
        if (accounts.length > 0) {
          account = accounts[0];
          const balanceBigNumner = await web3.eth.getBalance(account)
          balance = web3.utils.fromWei(balanceBigNumner)
        }
        console.log(account, balance)
        commit('SET_BALANCE', balance)
        commit('SET_ACCOUNT', account)
      } catch (e) {
        throw Error(e)
      }
    },
    // 获取产品详情
    async getProduct({ state }, addr) {
      try {
        const myContract = new state.web3.eth.Contract(nsureAbi, nsureToken);
        const result = await myContract.methods.getProduct(addr).call()
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    // 投保
    async buyInsurance({ state }, payload) {
      try {
        console.log(payload)
        const { web3, account } = state
        const myContract = new web3.eth.Contract(nsureAbi, nsureToken);
        const result = await myContract.methods.buyInsurance(payload).send({
          from: account
        })
        console.log(result)
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async addLiquidityEth({ state }, value) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(nsureAbi, nsureToken);
        const result = await myContract.methods.addLiquidityEth().send({
          from: account,
          value
        })
        console.log(result)
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async withdrawLiquidity({ state }, value) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(nsureAbi, nsureToken);
        const result = await myContract.methods.withdrawLiquidity(value).send({
          from: account,
          value
        })
        console.log(result)
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async ethPool({ state }) {
      try {
        const { web3 } = state
        const myContract = new web3.eth.Contract(nsureAbi, nsureToken);
        const result = await myContract.methods.ethPool().call()
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async InsuranceProviderPoolInfo({ state }) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(nsureAbi, nsureToken);
        const result = await myContract.methods.InsuranceProviderPoolInfo().call({
          from: account
        })
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    // 获取分红
    async getDividends({ state }) {
      try {
        const { web3 } = state
        const myContract = new web3.eth.Contract(stakingAbi, stakingToken);
        const result = await myContract.methods.getDividends().call()
        console.log(result)
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    // 预授权
    async setApprove({ state, dispatch }, value) {
      try {
        const { web3, account } = state
        const erc20TokenContract = new web3.eth.Contract(erc20TokenContractAbi, attToken);
        // const allowance = await erc20TokenContract.methods.allowance(account, stakingToken).call({
        //   from: account
        // })
        // if (allowance < value) {
        //   dispatch('staking', value)
        //   return
        // }
        const result = await erc20TokenContract.methods.approve(stakingToken, value).send({
          from: account
        })
        console.log(result)
        dispatch('staking', value)
      } catch (e) {
        throw Error(e)
      }
    },
    // 抵押
    async staking({ state }, value) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(stakingAbi, stakingToken);
        const result = await myContract.methods.staking(value).send({
          from: account
        })
        console.log(result)
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    // 第一次提现
    async submitWithdrawProposal({ state }, value) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(stakingAbi, stakingToken);
        const result = await myContract.methods.submitWithdrawProposal(value).send({
          from: account
        })
        console.log(result)
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    // 第二次提现，需要隔21天
    async doWithdraw({ state }) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(stakingAbi, stakingToken);
        const result = await myContract.methods.doWithdraw().send({
          from: account
        })
        console.log(result)
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async pool({ state }) {
      try {
        const { web3 } = state
        const myContract = new web3.eth.Contract(stakingAbi, stakingToken);
        const result = await myContract.methods.pool().call()
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async getPoolBalances({ state }) {
      try {
        const { web3 } = state
        const myContract = new web3.eth.Contract(stakingAbi, stakingToken);
        const result = await myContract.methods.getPoolBalances().call()
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async getInvestorInfo({ state }) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(stakingAbi, stakingToken);
        const result = await myContract.methods.getInvestorInfo(account).call()
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async shareOf({ state }) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(stakingAbi, stakingToken);
        const result = await myContract.methods.shareOf(account).call({
          from: account
        })
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
  },
})
