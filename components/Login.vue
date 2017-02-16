<template>
  <div class="login">
    <form class="form">
      <div class="input-box">
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="form.username">
      </div>
      <div class="input-box">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="form.password">
      </div>
      <div class="btn-box">
        <div class="btn" @click="login(form)">登录</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      islond: false,
      londtext: '',
      form: {
        username: '',
        password: ''
      }
    }
  },
  watch: {
    'active' (to, from) {
      console.log(to, from)
      // react to route changes...
    }
  },
  computed: {
  },
  methods: {
    login (form) {
      console.log(form.username, form.password)
      this.$emit('setlond', { start: true, londtext: '登录中。。。' })
      setTimeout(() => {
        this.$emit('setlond', { start: false, londtext: null })
      }, 2000)
    },
    ConTo () {
      console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
      width: 400px;
      margin: auto;
  }
  .form {
    margin-top: 40px;
  }
  
  .input-box {
    width: 80%;
    height: 43px;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 4px;
    padding: 10px;
  }
  .btn-box {
    width: 80%;
    height: 43px;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  
  label {
    display: inline-block;
    width: 20%;
    text-align: right;
  }
  
  input {
    width: 70%;
    height: 100%;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #ccc;
    outline: none;
  }
  
  .btn {
    text-align: center;
    background: #b20b1d;
    height: 100%;
    padding: 12px;
    color: #fff;
    border-radius: 4px;
  }
</style>
