<template>
    <div class="poster">
        <div class="box">
            <h3>Join Liquidity Bootstrapping Pool (LBP) for Nsure</h3>
            <p>TGE on october <br>28th 11:00 UTC</p>
            <ul>
                <li>
                    <div>
                        <h3>{{days}}</h3>
                        <h4>DAYS</h4>
                    </div>
                </li>
                <li class="point"><span></span><span></span></li>
                <li>
                    <div>
                        <h3>{{hours}}</h3>
                        <h4>HOURS</h4>
                    </div>
                </li>
                <li class="point"><span></span><span></span></li>


                <li>
                    <div>
                        <h3>{{min}}</h3>
                        <h4>MINUTES</h4>
                    </div>
                </li>
                <li class="point"><span></span><span></span></li>


                <li>
                    <div>
                        <h3>{{seconds}}</h3>
                        <h4>SECONDS</h4>
                    </div>
                </li>
            </ul>
            <!--<h4 class="bottom_button">Swap USDC for Nsure Tokens-->
            <!--</h4>-->
            <a href="https://lbp.nsure.network/" target="_Blank" class="bottom_button">Swap USDC for Nsure Tokens</a>
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
                endDate: new Date('2020/10/28 11:00 UTC+0')
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
                    return this.date_ = `Ended`;
                }
                let day = parseInt((msec / 1000 / 60 / 60 / 24).toString());
                let hr = parseInt((msec / 1000 / 60 / 60 % 24).toString());
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
        height: 100vh;
        background-image: url("../assets/images/poster_bg.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: right;
        padding: 0 2%;
        display: flex;
        justify-content: start;
        align-items: center;
        text-transform: uppercase;

        .box {
            top: 0;
            bottom: 0;
            height: 100%;
            display: flex;
            padding: 5% 0;
            box-sizing: border-box;
            flex-direction: column;
            margin: auto 0;
            text-align: start;
            align-items: start;
            justify-content: space-around;

            h3 {
                color: white;
                font-size: 34px;
                font-family: "Arial BoldMT";
                font-weight: bold;
            }

            p {
                font-size: 60px;
                margin-left: 50px;

                font-family: "ArialMT";
                font-weight: 400;
                text-align: inherit;
                color: white;
                box-sizing: border-box;
            }

            ul {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 50px;

                li {

                    div {
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        h3 {
                            font-size: 100px;
                            font-weight: bold;
                            color: #13c7fd;
                            line-height: 50px;
                           margin-bottom: 20px;
                        }

                        h4 {

                            font-size: 24px;
                            font-weight: 400;
                            line-height: 1;
                            color: #13c7fd;

                        }
                    }

                }

                .point {
                    width: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-bottom: 42px;
                    box-sizing: border-box;

                    span {
                        display: block;
                        width: 10px;
                        height: 10px;
                        border-radius: 100px;
                        background-color: #13c7fd;
                    }
                    span:last-child{
                        margin-top: 30px;
                    }
                }
            }


            .bottom_button {

                TEXT-DECORATION:none;
                margin-left: 50px;

                height: 100px;
                /*margin: 0 auto;*/
                width: 630px;
                border: 3px #13c7fd solid;
                border-radius: 100px;
                box-sizing: border-box;


                font-size: 36px;
                font-weight: bold;
                color: #13c7fd;
                line-height: 100px;
                text-align: center;

            }

        }


    }
</style>
