<template>
    <div class="poster">
        <img src="../assets/images/center_ball.png" alt="">
        <div class="box">
            <h3>Join Liquidity Bootstrapping Pool (LBP) for Nsure</h3>
            <div class="center">

                <div class="tilan">
                    <p>TGE on october <br> 22th 12:00</p>
                    <img src="../assets/images/center_line.png" alt="">
                    <div class="right">
                        <div class="top">
                            <img src="../assets/images/top_tighe.png" alt="">
                            <h5>TGE date TBA</h5>
                        </div>
                        <ul>
                            <li>
                                <div>
                                    <h3>{{days}}</h3>
                                    <h4>DAYS</h4>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>{{hours}}</h3>
                                    <h4>HOURS</h4>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>{{min}}</h3>
                                    <h4>MINUTES</h4>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>{{seconds}}</h3>
                                    <h4>SECONDS</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h4 class="bottom_button">Swap ETH for Nsure Tokens
            </h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Poster",
        data() {
            return {
                days: '--',
                hours: '--',
                min: '--',
                seconds: '--',
                endDate: new Date('2020/10/26')
            };
        },
        mounted: function () {
            this.countdown();
        },
        methods: {
            countdown() {
                const end = this.endDate.valueOf();
                const now = new Date().valueOf();
                const msec = end - now;
                if (msec < 0) {
                    return this.date_ = `End`;
                }
                let day = parseInt((msec / 1000 / 60 / 60 / 24).toString());
                let hr = parseInt((msec / 1000 / 60 / 60 % 24).toString()) + day * 24;
                let min = parseInt((msec / 1000 / 60 % 60).toString());
                let sec = parseInt((msec / 1000 % 60).toString());
                this.days = day > 9 ? day : '0' + day;
                this.hours = hr > 9 ? hr : "0" + hr;
                this.min = min > 9 ? min : "0" + min;
                this.seconds = sec > 9 ? sec : "0" + sec;
                this.date_ = `${hr}H ${min}m`;
                setTimeout(() => {
                    this.countdown();
                }, 1000);
            }
        }
    }
</script>

<style lang="less" scoped>
    .poster {
        height: 535px;
        background-image: url('../assets/images/poster_bg.jpg');
        background-color: #19264E;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;

        img {
            width: 586px;
            height: 535px;
        }

        .box {
            position: absolute;
            right: 5%;
            display: flex;
            top: 0;
            bottom: 0;
            margin: auto 0;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h3 {
                color: white;
                font-size: 36px;
            }

            .bottom_button {
                height: 120px;
                width: 630px;
                border: 3px #75FFBE solid;
                border-radius: 100px;
                box-sizing: border-box;


                font-size: 36px;
                font-weight: bold;
                color: #75FFBE;
                line-height: 120px;
                text-align: center;

            }

            .center {
                height: 240px;
                width: 1157px;
                margin: 28px 0 22px 0;
                background-image: url("../assets/images/poster_cen.png");
                background-size: contain;
                background-position: center;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .tilan {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;

                    p {
                        /*width: 423px;*/
                        font-size: 50px;
                        font-family: Arial;
                        text-align: center;
                        font-weight: 400;
                        color: white;
                        line-height: 72px;
                        flex: 1;
                        padding-left: 20px;
                        box-sizing: border-box;
                    }

                    img {
                        height: 135px;
                        width: 1px;
                    }

                    .right {
                        padding: 0 16px;
                        box-sizing: border-box;
                        flex: 2;

                        .top {

                            display: flex;

                            img {
                                width: 68px;
                                height: 17px;
                                display: block;
                                align-items: center;
                            }

                            h5 {
                                margin-left: 10px;
                                color: white;
                                font-size: 16px;
                                height: 16px;
                            }
                        }

                        ul {
                            display: flex;

                            li {
                                margin-right: 70px;

                                div {
                                    text-align: center;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    justify-content: center;

                                    h3 {
                                        font-size: 100px;
                                        font-weight: bold;
                                        color: #75FFBE;
                                        line-height: 72px;
                                        margin: 10px 0;
                                    }

                                    h4 {

                                        font-size: 24px;
                                        font-weight: 400;
                                        color: #75FFBE;

                                    }
                                }

                            }
                        }
                    }
                }
            }
        }


    }
</style>
