import Vue from 'vue'
import App from './App'
import {axiosInit} from '@/libs/axios'
import MpvueRouterPatch from 'mpvue-router-patch'

// 初始化axios
axiosInit()

Vue.use(MpvueRouterPatch)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
