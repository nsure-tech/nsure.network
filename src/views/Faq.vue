<template>
    <div class="faq">
        <div class="faq-wrapper">
            <div class="faq-banner">
                <div class="pages-wrapper">
                    <div class="title">Common Questions Around Interacting With Nsure.</div>
                </div>
            </div>
            <div class="faq-content pages-wrapper">
                <ul>
                    <li v-for="(item, index) in list" :key="index">
                        <div class="faq-item">
                            <div class="title">{{item.f}}</div>
                            <div class="descrption">{{item.a}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list: [
                {
                    f: 'What is Nsure.network?',
                    a: 'Nsure.network works like an insurance company that is governed by Nsure stakers. By taking a risk from an individual, and spreading that risk around a community, the individual is able get their risk in the open finance world covered. Nsure.network is built to protect and hedge your DeFi risk on different protocols.  '
                },
                {
                    f: 'How can I participate in Nsure.network?',
                    a: 'Users are able to stake Nsure toekn, vote with their staked Nsure and provide capital to the network. Users who participates in the governance voting  will be able to collect rewards from the protocol. Nsure will also be awarded to users who provide capital to the network.'
                },
                {
                    f: 'What does the NsureDAO govern?',
                    a: 'NsureDAO governs key parameters of Nsure.network, such as type of product issuance, community claim assessment and profit pool rewards. Additional governing parameters can be proposed by the DAO vote.'
                },
                {
                    f: 'How are profits generated for Nsure.network? How does it benefit Nsure  holders?',
                    a: 'An insurance fee is automatically injected into the profit pool when the insurance contract expires. NSR holders can stake and vote in NsureDAO to distribute bonus issuance from the profit pool.'
                },
                {
                    f: 'Sounds good! How do I start earning Nsure?',
                    a: 'You can utilize a web3wallet to provide capital for Nsure.network. Simply deposit your stablecoins, ETH or Nsure as capital for the capital pool - Nsure will be automatically awarded to capital providers. '
                },
                {
                    f: 'How do I participate in NsureDAO?',
                    a: "All NSR holders who staked their NSR will be able to vote on NsureDAO's governance proposals."
                },
                {
                    f: 'Does Nsure.network control my funds?',
                    a: 'No, you have full control over the capital provided to the network at any point of time.'
                },
                {
                    f: 'Is there a lockup period for capital provisioning?',
                    a: 'There is no lockup on the capital provided when the Minimum Capital Requirement is fulfilled. However, the capital pool can be locked when there are pending claims that exceeds the Minimum Capital Requirement. There is also a 30 days pending period for withdrawals from the capital pool. For more information on the capital pool, kindly refer to our whitepaper.'
                },
                {
                    f: 'Are Nsure.network smart contracts audited?',
                    a: 'The audit is currently being carried out by a 3rd party auditing firm. We urge all users to read through our terms and service and fully understand the risk involved with utilizing our platform.'
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.faq {
    .faq-banner {
        background-color: #1B2532;

        .title {
            color: #fff;
            font-size: 40px;
            line-height: 1.5;
            padding: 180px 0 80px;
        }
    }

    .faq-content {
        padding: 80px 0;
        ul {
            > li {
                background-color: #fff;
                margin-bottom: 30px;
                box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.05);

                .faq-item {
                    padding: 40px;

                    .title {
                        color: #1B2532;
                        font-size: 30px;
                        line-height: 1.2;
                        margin-bottom: 30px;
                    }

                    .descrption {
                        color: #1B2532;
                        font-size: 20px;
                        line-height: 1.5;
                        opacity: 0.4;
                    }
                }
            }
        }
    }
}
</style>
