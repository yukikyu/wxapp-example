<style lang="less" scoped>

  // logo图片
  .logo-img {
    width: 86px;
    height: 86px;
    margin-left: calc(50% - 86px / 2)
  }
  // 验证码图片
  .captcha-img{
    height: 72rpx;
    width: 240rpx;
  }
  // 验证码box
  .captcha-box{
    padding: 7px 15px;
  }

</style>
<template>
  <div>
    <img src="/static/images/xsdt-logo.png" class="logo-img">
    <i-input title="用户名" v-model="form.username" @change="form.username=$event.target.detail.value"
             placeholder="请输入用户名"/>
    <i-input title="密码" type="password" v-model="form.password" @change="form.password=$event.target.detail.value" placeholder="请输入密码"/>
    <div class="captcha-box">
      <input v-model="form.code" style="width: 270rpx;float: left;" placeholder="请输入验证码"/>
      <img @click="initCaptcha" :src="drawCodeImageURL+form.captchaId" class="captcha-img">
    </div>
    <i-button @click="login">登录</i-button>
  </div>
</template>

<script>
  import card from '@/components/card'

  import {
    login,
    initCaptcha,
    drawCodeImageURL
  } from '@/api'

  export default {
    data() {
      return {
        form: {
          username: "test",
          password: "123456",
          code: "",
          captchaId: "",
          saveLogin: true
        },
        drawCodeImageURL
      }
    },
    components: {
      card
    },
    methods: {
      login() {
        login(this.form).then((res)=>{
          console.log(res,"res");
          if(res.success){
            console.log(res.result,"accessToken")
            // 储存token
            wx.setStorage({
              key:"accessToken",
              data:res.result
            })
          }else{
            this.initCaptcha()
          }
        })
      },
      initCaptcha(){
        initCaptcha().then((res)=>{
          if(res.success){
            this.form.captchaId=res.result;
          }
        })
      }
    },
    mounted(){
      // 初始化验证码
      this.initCaptcha();
    },
    created() {
      // let app = getApp()
    }
  }
</script>
