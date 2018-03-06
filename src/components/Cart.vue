<template>
  <div class="hello">
   这是购物车页面；
   <h1>接受传过来的参数是===》<span>{{$route.query.id}}</span></h1>
   <router-link to="/list">跳回到列表页</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span{
    color:rgb(142, 250, 19);
  }
</style>
