<template>
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
                            <img src="../assets/images/twiiter@2x.png" width="16" alt="">
                            <a href="https://twitter.com/Nsure_network" target="_blank" rel="">Twitter</a>
                        </li>
                        <li>
                            <img src="../assets/images/discord@2x.png" width="16" alt="">
                            <a href="https://discord.com/invite/nSvAapa" target="_blank" rel="">Discord</a>
                        </li>
                        <li>
                            <img src="../assets/images/telegram@2x.png" width="16" alt="">
                            <a href="https://t.me/nsurenet" target="_blank" rel="">Telegram</a>
                        </li>
                        <li>
                            <img src="../assets/images/medium@2x.png" width="16" alt="">
                            <a href="https://medium.com/@nsure_network" target="_blank" rel="">Medium</a>
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
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style  lang="less" scoped>
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
</style>
