<template>
  <div class="hello">{{ msg }}</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello This Color World'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    height: 100px;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    font-size: 69px;
    font-weight: 800;
    color: #3cc597;
    text-align: center;
    margin: auto;
  }
</style>
