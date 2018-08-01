<template>
    <div class="mian-wrap" :class="$t('message.i18n')">
      <div class="mian-row  white " >
        <div class="mian-content  auto white">
            <div class="mian-img">
              <div class="center img"></div>
            </div><div class="mian-text ">
              <div class="center text">
                <div class="text-tit" >
                  {{$t('message.letter1')}}
                </div>
                <p>
                  {{$t('message.letterInfo1')}}
                </p>
              </div>
          </div>
        </div>
      </div>
      <div class="mian-row  ">
        <div class="mian-content  auto">
          <div class="mian-text ">
            <div class="center text left">
              <div class="text-tit" >
                {{$t('message.letter2')}}
              </div>
              <p >
                {{$t('message.letterInfo2')}}
              </p>
            </div>
          </div><div class="mian-img">
              <div class="center img"></div>
            </div>
        </div>
      </div>
      <div class="mian-row  white">
        <div class="mian-content  auto white">
            <div class="mian-img">
              <div class="center img"></div>
            </div><div class="mian-text ">
          <div class="center text">
            <div class="text-tit" >


              {{$t('message.letter3')}}
            </div>
            <p>
              {{$t('message.letterInfo3')}}
            </p>
          </div>
          </div>
        </div>
      </div>
      <div class="mian-row  ">
        <div class="mian-content  auto ">
            <div class="con-info">
              <span class="text-tit">{{$t('message.about')}}</span>
              <br>
              <span>{{$t('message.aboutTitle1')}}</span>
              <br>
              <span>
                {{$t('message.aboutTitle2')}}
              </span>
              <br>
              <span>{{$t('message.aboutTitle3')}} </span>
              <br>
              <span>{{$t('message.aboutTitle4')}}</span>
              <div>{{$t('message.aboutTitle5')}}</div>
            </div>
          </div>
        </div>
      </div>
    <!--</div>-->
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
  .mian-wrap{
    width: 100%;
     & .mian-row:nth-child(1) .img{
      background-image: url('../../../static/img/1.png');
       background-image: -webkit-image-set(
       url('../../../static/img/1.png') 1x,
       url('../../../static/img/1@2x.png') 2x
       );
       background-image: image-set(
       url('../../../static/img/1.png') 1x,
       url('../../../static/img/1@2x.png') 2x
       );
    }
    & .mian-row:nth-child(2) .img {
      background-image: url('../../../static/img/2.png');
      background-image: -webkit-image-set(
          url('../../../static/img/2.png') 1x,
          url('../../../static/img/2@2x.png') 2x
      );
      background-image: image-set(
          url('../../../static/img/2.png') 1x,
          url('../../../static/img/2@2x.png') 2x
      );
    }
      & .mian-row:nth-child(3) .img{
      background-image: url('../../../static/img/3.png');
      background-image: image-set(
          url('../../../static/img/3.png') 1x,
          url('../../../static/img/3@2x.png') 2x
      );
        background-image: -webkit-image-set(
          url('../../../static/img/3.png') 1x,
          url('../../../static/img/3@2x.png') 2x
      );
      }
      & .mian-row:nth-child(2) .text{
          /*width: 421px;*/
        /*background-color: red !important;*/
        width: 100%;
        /*margin-left: 130px;*/
        .text.tit{
        }
        p{
          width: 400px;
        }
      }
    }


  .mian-wrap{
    width: 100%;
    background:rgba(252,252,253,1);

  }
  .mian-content{
    width: 1200px;
    height: 500px;
    background:rgba(252,252,253,1);
    .mian-img,
    .mian-text{
      display: inline-block;
      width: 50%;
      height: 100%;
      position: relative;
      .img{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: red;
      }
      .text{
        /*width: 303px;*/
      }
      .center{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /*text-align: center;*/
      }
    }
  }
  .text{
    width: 100%;
    .text-tit{
      width: 100%;
      word-break: normal;
      word-wrap: break-word;
      font-size:36px;
      font-family:PingFangSC-Medium;
      color:rgba(51,44,41,1);
      /*line-height:36px;*/
      font-weight: 500;
      /*white-space:nowrap;*/


    };
    p{
      width: 100%;
      word-break: break-word;
      margin-top: 30px;
      font-size:20px;
      font-family:PingFangSC-Regular;
      font-weight: 400;
      color:rgba(68,73,84,1);
      line-height:34px;

    }
  }
  .con-info{
    text-align: center;
    .text-tit{
      width: 100%;
      margin-top: 123px;
      margin-bottom: 40px;
      height:36px;
      font-size:36px;
      font-weight: 500;
      font-family:PingFangSC-Medium;
      color:rgba(51,44,41,1);
      line-height:36px;
      white-space: nowrap;
    }
    div{
      width: 100%;
      margin-top: 30px;
      height:24px;
      font-size:24px;
      font-family:PingFangSC-Medium;
      color:rgba(51,44,41,1);
      line-height:24px
    }
    span{
      width: 100%;
      display: inline-block;
      font-size:20px;
      font-family:PingFangSC-Regular;
      font-weight: 400;
      color:rgba(68,73,84,1);
      line-height:34px
    }
  }
  .white{
    background-color: #fff;
  }
.mian-wrap.zh{
  .mian-text{
    box-sizing: border-box;
    /*padding-left:100px;*/
    .text{
      width: 50%;
    }
    .text.left{
      width: 100%;
      .text-tit,p{
        text-align: center;
        margin: auto;
        word-break: break-word;
        /*word-wrap: break-spaces;*/
      }
      p{
        margin-top: 30px;
      }
    }
  }
  p{
    width: 300px ;
  }
}
  .mian-wrap.en{
  .mian-text{
    box-sizing: border-box;
    padding-left:100px;
    .text{
      /*width: 100%;*/
    }
    .text.left{
      width: 100%;
      .text-tit,p{
        /*text-align: center;*/
        margin: auto;
        word-break: break-word;
        word-wrap: break-spaces;
      }
      p{
        margin-top: 30px;
        width: 100%;
      }
    }
  }
  p{
    /*width: 300px ;*/
  }
}
  .mian-wrap.jp{
    .mian-text{
      box-sizing: border-box;
      /*padding-left:100px;*/
      .text{
        /*width: 100%;*/
      }
      .text.left{
        width: 100%;
        .text-tit,p{
          /*text-align: center;*/
          margin: auto;
          word-break: break-word;
          word-wrap: break-spaces;
        }
        p{
          margin-top: 30px;
          width: 100%;
        }
      }
    }
    & .mian-row:nth-child(1){

    p{
      width: 414px ;
    }
    }
    & .mian-row:nth-child(2){
      .text.left p{
      width: 555px ;
        margin: 30px 0px 0px;
    }
    }
    & .mian-row:nth-child(3) {
      .text .text-tit,p{
        width: 468px;
      }

    }
  }

</style>
