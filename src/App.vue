<template>
  <div id="app">
    <tou></tou>
    <router-view/>
    <jiao></jiao>
  </div>
</template>

<script>
import Tou from "./components/header/Tou.vue";
import Jiao from "./components/footer/Jiao.vue";
export default {
  name: 'App',
  components:{
  	"tou":Tou,
  	"jiao":Jiao
  }
}
</script>

<style>
*{
		padding:0; 
		margin:0;
	}
#app {
	
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
</style>
