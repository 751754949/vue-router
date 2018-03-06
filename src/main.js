import Vue from 'vue'
import App from './App'
import {router} from './router'
//.....................................
// import {sum,minus} from './util'
import * as util from './util'   //作为 util 服务；

console.log(`sum:${util.sum(3, 4)}`);
console.log(`sum:${util.minus(10,2)}`);

//.....................................
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
