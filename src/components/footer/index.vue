<template>
    <footer>
      <div class="footer-content auto ">
        <div class="list-wrap clearfix">
          <div class="list left ">
            <ul >
              <li class="title">{{$t('message.contactUs')}}</li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">WeChat</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </div>
          <div class="list right">
            <ul>

              <li class="title">{{$t('message.downloadApp')}}</li>
              <li class="text-right"><a href="#">IOS</a></li>
              <li class="text-right"><a href="#">Android</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-info">
          ©2015-2018 chain.cn
        </div>
      </div>
    </footer>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
  footer{
    position: relative;
    width: 100%;
    height:240px;
    background:rgba(255,255,255,1);
  }

  .footer-content{
    padding-top: 30px;
    /*background-color: red;*/
    ul li{
      margin-bottom: 15px;
      a{
        height:12px;
        font-size:12px;
        font-family:PingFangSC-Medium;
        color:rgba(68,73,84,1);
        line-height:12px;
      }
    }

    .text-right a{
      &:hover::before{
        opacity: 1;
        width: 160px;
        height: 160px;
      }
      &::before{
        transition: all 300ms ease-in-out;
        content: '';
        display: block;
        width: 0px;
        height: 0px;
        top: 50px;
        right: 270px;
        background-color: black;
        position: absolute;
        opacity: 0;
      }
    }
    .title{
      margin-bottom: 20px;
      opacity: .5;
      height:14px;
      font-size:14px;
      font-family:PingFangSC-Medium;
      color:rgba(68,73,84,1);
      line-height:14px;
    }
  }
  .footer-info{
    margin-top: 15px;
    width:128px;
    height:12px;
    font-size:12px;
    font-family:PingFangSC-Regular;
    color:rgba(68,73,84,1);
    line-height:12px;
  }
</style>
