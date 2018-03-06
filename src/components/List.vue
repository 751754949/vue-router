<template>
  <div class="hello">
      列表页传过来的id=====><h3>{{$route.params.id}}</h3>    <!-- 接受地址栏传过来的 id 或者其他信息(动态路由) -->
      <h3>{{$route.params.name}}</h3>

      <router-link to="/list/title">跳转到Title子组件</router-link>
      <router-link to="/list/img">跳转到Img子组件</router-link>
      <div>
        <router-view></router-view>
      </div>
      <router-link to="/cart">跳转到购物车页面</router-link>
      <button @click="jump">这是一个button标签《===》跳转到购物车页面</button>
      <br>
      <br>
      <br>
      <router-link to="/search">1跳转到购物车页面</router-link>
      <router-link v-bind:to="{path:'search'}">2跳转到搜索页面</router-link> 
      <router-link :to="{ path: 'user', params: { userId: 123 }}">3跳转到搜索页面</router-link>    
       <!-- params 是路由的参数，并不是页面跳转的参数 -->
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
    }
  },
  methods:{
    jump(){     //es6 语法  ==== jump:function(){}
      // this.$router.push("cart");
      this.$router.push({path:"cart?id=3"});
      // this.$router.push({path:"cart",query:{id:123}});
      // this.$router.go(-2)    //回到之前的两个页面
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
