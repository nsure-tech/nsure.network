import Vue from 'vue'
import Vuex from 'vuex'
import Web3 from 'web3'
import erc20TokenContractAbi from 'human-standard-token-abi'
import Apis from '@/request/index'
import { nsureToken, stakingToken, nsrToken } from '@/config'
const web3 = new Web3(Web3.givenProvider);

const nsureAbi = require('@/config/nsureAbi.json')
const nsureTokenAbi = require('@/config/nsureTokenAbi.json')
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
        const { cost, productAddr, amount, blocks, ipAddrs, ipAmount } = payload
        const myContract = new web3.eth.Contract(nsureAbi, nsureToken);
        const result = await myContract.methods.buyInsurance(productAddr, amount, blocks, ipAddrs, ipAmount).send({
          from: account,
          value: cost
        })
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async addLiquidityEth({ state }, value) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(nsureAbi, nsureToken);
        // const estimateGas = await myContract.methods.addLiquidityEth().estimateGas({
        //   from: account,
        //   value
        // })
        // console.log({ estimateGas })
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
          from: account
        })
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
        const result = await myContract.methods.InsuranceProviderPoolInfo(account).call({
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
        const { web3, account } = state
        const myContract = new web3.eth.Contract(stakingAbi, stakingToken);
        const result = await myContract.methods.getDividends().send({
          from: account
        })
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
        const erc20TokenContract = new web3.eth.Contract(erc20TokenContractAbi, nsrToken);
        // const estimateGas = await erc20TokenContract.methods.approve(stakingToken, value).estimateGas({
        //   from: account
        // })
        // console.log({ estimateGas })
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
        // const estimateGas = await myContract.methods.staking(value).estimateGas({
        //   from: account
        // })
        // console.log({ estimateGas })
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
        console.log(e)
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
        console.log(result)
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
    // Capital reward(eth) 不传参表示获取Total reward余额，传参地址表示获取某地址的reward余额
    async takerBalanceOf({ state }, address) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(nsureTokenAbi, nsrToken);
        let result
        if (address) {
          result = await myContract.methods.takerBalanceOf(address).call({
            from: account
          })
        } else {
          result = await myContract.methods.takerBalanceOf().call({
            from: account
          })
        }
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    // 带参数表示提现金额，不带参数表示提现所有
    async takerWithdraw({ state }, value) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(nsureTokenAbi, nsrToken);
        const result = await myContract.methods.takerWithdraw(value).send({
          from: account,
          value
        })
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    // Liquidity mining reward(nsure) 不传参表示获取Total reward余额，传参地址表示获取某地址的reward余额
    async makerBalanceOf({ state }, address) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(nsureTokenAbi, nsrToken);
        let result
        if (address) {
          result = await myContract.methods.makerBalanceOf(address).call({
            from: account
          })
        } else {
          result = await myContract.methods.makerBalanceOf().call({
            from: account
          })
        }
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    // 带参数表示提现金额，不带参数表示提现所有
    async makerWithdraw({ state }) {
      try {
        const { web3, account } = state
        const myContract = new web3.eth.Contract(nsureTokenAbi, nsrToken);
        const result = await myContract.methods.makerWithdraw().send({
          from: account
        })
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async getProductList(_, payload) {
      try {
        const result = await Apis.getProductList(payload)
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async getProviderList(_, payload) {
      try {
        const result = await Apis.getProviderList(payload)
        return Promise.resolve(result)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  },
})
