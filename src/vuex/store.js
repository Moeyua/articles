// 这个文件的作用是在整个Vue.js项目中声明：我们要使用Vuex进行状态管理。
// 在一个模块化的打包系统中，您必须显式地通过 Vue.use() 来安装 Vuex：
import Vue from 'vue'
import Vuex from 'vuex'
// 后续要用到的counter状态
import articles from '@/vuex/modules/articles'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: { // 所有要管理的module都列在这里
    articles
  },
  strict: debug,
  middlewares: []
})
