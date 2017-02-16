<template>
  <div id="app">
    <ul class="tabs">
      <li class="tab" v-for="item in optinos.lists" :class="item.class">
        <router-link :to="{ path: item.name }" >
          {{ item.text }}
        </router-link>
      </li>
    </ul>
    <div v-if="islond" class="londbg">
      <div class="lond-box">
        <div class="login-top-anim"></div>
        <p v-if="londtext" class="londtext"><span>{{ londtext }}</span></p>
      </div>
    </div>
    <router-view @setlond="setlond"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      islond: false,
      londtext: '',
      optinos: {
        lists: [
          {
            class: 'tab-index',
            name: '/',
            text: 'LOGO'
          },
          {
            class: 'tab-list',
            name: '/list',
            text: '列表'
          },
          {
            class: 'right-login',
            name: '/login',
            text: '登录'
          }
        ]
      }
    }
  },
  methods: {
    setlond (res) {
      if (res.start !== 'undefined') {
        this.islond = res.start
        this.londtext = res.londtext
      }
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  .login-top-anim {
      width: 50px;
      height: 50px;
      border: 2px solid;
      border-top-color: hsl(154, 100%, 31%);
      border-left-color: hsl(216, 87%, 52%);
      border-bottom-color: hsl(8, 66%, 50%);
      border-right-color: hsl(42, 100%, 51%);
      border-radius: 50%;
      margin: auto;
      animation: loading 1.2s cubic-bezier(1, 1, 1, 1) infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .londbg{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.6);
  }
  .lond-box{
    width: 150px;
    height: 100px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .londtext{
    background: #fff;
    border-radius: 4px;
    padding-top:4px;
    padding-bottom: 4px;
    text-align: center;
    margin-top: 10px;
  }
  .londtext span{
    animation: showorhide 3s cubic-bezier(1, 1, 1, 1) infinite;
  }
  @keyframes showorhide{
    0%{
      opacity: 1
    }
    50%{
      opacity: 0
    }
    100%{
      opacity: 1
    }
  }
  .tabs {
      width: 100%;
      height: 44px;
      background: #000;
      padding: 5px;
  }
  .tab {
      padding: 5px 10px;
      float: left;
      color: #ccc;
      margin-left: 10px;
  }
  .tab:hover a{
    color:#fff;
  }
  .tab-list a.router-link-active{
    color: #fff;
  }
  .tab.right-login{
    float: right;
  }
  .tab:first-child{
    margin: 0;
  }
  .tab a {
      color: #ccc;
  }
</style>
