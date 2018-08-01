<template>
        <header>
          <div class="nav-wrap auto clearfix">
            <div class="nav left">

              <span class="logo"><a href="/">Cyberblock</a></span>
            </div>
            <div class="nav right">
              <span>Android</span>
              <span>IOS</span>
              <label :class="{'actived': langshow}" for="yy"  @click="clickLangBar">{{curLang}}

              </label>
              <input type="radio" id="yy">
              <ul v-if="langshow">
                <li  v-for="(t,k) in lang"  @click="changeLang(k)" >{{t}}</li>
              </ul>

            </div>
          </div>
          <div class="header-content clearfix">
            <div class="content left">
                <div class="con-title">
                  Cyberblock Wallet
                </div>
                <div class="con-info">
                  {{$t('message.title')}}
                </div>
              <!--<a href="#" class="con-btn">下载数字钱包</a>-->
            </div>
            <div class="content right" :class="$t('message.imgSrc')"></div>
          </div>
        </header>
</template>

<script>
    export default {
        name: "index",
        data(){
          return {
            lang:{
              'en': 'English',
              'zh': '简体中文',
            },
            // curLang: this.$i18n.locale,
            langshow: false,
          }
        },
      computed:{
        curLang(){
          return this.lang[this.$i18n.locale]
        }
      },
        methods:{
          clickLangBar() {

            this.langshow = !this.langshow
          },
          changeLang(lang){
            
            this.langshow = !this.langshow
            this.$i18n.locale = lang
            this.curLang = this.lang[lang]
          }
        }
    }
</script>

<style lang="scss" scoped>
  header{
    width:100%;
    /*height:800px;*/
    background:linear-gradient(-180deg,#220953,#7470FF);
  }
  .nav-wrap{
    padding-top: 30px;
    padding-bottom: 131px;
  }
  .logo a{
    margin-left: 39px;
    position: relative;
    &::before{
      position: absolute;
      top: 0px;
      left: -40px;
     content: '';
      display: inline-block;
      width: 24px;
      height: 24px;
      background-image: url('../../../static/img/logo.png');
      background-image: -webkit-image-set(
          url('../../../static/img/logo.png') 1x,
          url('../../../static/img/logo@2x.png') 2x
      );
      background-image: image-set(
          url('../../../static/img/logo.png') 1x,
          url('../../../static/img/logo@2x.png') 2x
      );

    }
    height:16px;
    font-size:16px;
    font-family:PingFangSC-Semibold;
    color:rgba(255,255,255,1);
    line-height:16px;
  }
    .nav.right{
      position: relative;
      span{
        margin-right: 60px;
        position: relative;
        &:hover::after{
          opacity: 1;
          content: '';
          position: absolute;
          top: 50px;
          left: -30px;
          display: inline-block;
          width: 160px;
          height: 160px;
          background-color: #fff;
        }
        &::after{
          transition: all 300ms ease-out;
          opacity: 0;
          content: '';
          position: absolute;
          top: 50px;
          left: -30px;
          display: inline-block;
          width: 120px;
          height: 0px;
          background-color: #fff;

        }
      }
      span,
      label{
        position: relative;
        height:16px;
        font-size:16px;
        font-family:PingFangSC-Regular;
        color:rgba(255,255,255,1);
        line-height:16px;
      }

      label+input{
        display: none;
      }
      label::after{
        /*position: absolute;
        top:50%;
        right: 0px;*/
        position: relative;
        margin-left: 10px;
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        line-height: 16px;
        border-bottom: 6px solid transparent;
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
        border-top: 6px solid #FFF;
        /*transform: translate(50% ,0px);*/
        transform: translateY(3px);

      }
      .actived::after{
        transform: rotate(180deg) translateY(3px);


        transform-origin: center;


      }

      ul{
        position: absolute;
        box-sizing: border-box;
        padding: 12px 0px;
        right: 0px;
        top: 30px ;
        width: 100px;
        background-color: #fff;
        background:#ffffff;
        box-shadow:0 4px 30px 0 rgba(41,74,147,0.20);
        border-radius:2px;
        width:250px;
        height:276px;
        li{

          width: 50%;
          display: inline-block;
          height: 36px;
          font-family:PingFangSC-Regular;
          font-weight: 400;
          font-size:12px;
          color:#444954;
          line-height:36px;
          text-align:center;
        }
      }
    }
    .header-content{
      width: 1200px;
      height: 606px;
      margin: 0 auto;
    }
  .content{
    width: 600px;
    height: 606px;
    &.right {
      width: 460px;
      height: 100%;
      /*background-image: url('../../../static/img/white.png') ;*/
      /*background-repeat: no-repeat;*/
      /*background-image: -webkit-image-set(*/
          /*url('../../../static/img/white.png') 1x,*/
          /*url('../../../static/img/white@2x.png') 2x*/
      /*);*/
      /*background-image: image-set(*/
          /*url('../../../static/img/white.png') 1x,*/
          /*url('../../../static/img/white@2x.png') 2x*/
      /*);*/
      &.img-en{
        background-image: url('../../../static/img/英文.png');
        background-image: -webkit-image-set(
            url('../../../static/img/英文.png') 1x,
            url('../../../static/img/英文@2x.png') 2x
        );
        background-image: image-set(
            url('../../../static/img/英文.png') 1x,
            url('../../../static/img/英文@2x.png') 2x
        );
      }
      &.img-zh{
        background-image: url('../../../static/img/中文.png');
        background-image: -webkit-image-set(
            url('../../../static/img/中文.png') 1x,
            url('../../../static/img/中文@2x.png') 2x
        );
        background-image: image-set(
            url('../../../static/img/中文.png') 1x,
            url('../../../static/img/中文@2x.png') 2x
        );
      }

    }
    &.left{
      /*position: relative;*/
      .con-title{
        margin-top: 188px;
        height:60px;
        font-size:60px;
        font-family:PingFangSC-Semibold;

        color:rgba(255,255,255,1);
        line-height:60px;
      }
      .con-info{
        margin-top: 30px;
        /*height:30px;*/
        font-size:30px;
        font-family:PingFangSC-Regular;
        font-weight: 400;
        color:rgba(255,255,255,1);
        line-height:1.5;
      }
      .con-btn{
        margin-top: 80px;
        display: inline-block;
        width:500px;
        height:60px;
        border-radius:4px;
        opacity:0.5;
        border:1px solid rgba(255,255,255,1);
        font-size:20px;
        font-family:PingFangSC-Regular;
        font-weight: 400;
        color:rgba(255,255,255,1);
        line-height:60px;
        text-align: center;

      }
    }
  }

</style>
