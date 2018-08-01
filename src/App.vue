<template>
  <div id="app">

    <cn-header></cn-header>
    <cn-mian></cn-mian>
    <cn-footer></cn-footer>
  </div>
</template>

<script>
// import CnMian from './components/mian'

export default {
  name: 'App',
  components: {
    // CnMian
  }
}
</script>

<style>
  .clearfix:before,
  .clearfix:after {
    content:"";
    display:table;
  }
  .clearfix:after {
    clear:both;
    overflow:hidden;
  }
  .clearfix {
    zoom:1;
  }
  html,body{
    height: 100%;
    min-width: 1200px;
    line-height: 1.0;
    cursor: default;
    font-family: PingFangSC-Regular,"Microsoft YaHei",微软雅黑, Helvetica, Tahoma, Arial, \5b8b\4f53, sans-serif;
  }
    a{
      text-decoration: none;
      color: #444945;
    }
  .text-right{
    text-align: right;

  }
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .auto{
    width: 1200px;
    margin: 0 auto;
  }

</style>
