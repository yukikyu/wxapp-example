<template>
  <div><!-- @click="clickHandle"-->
    <button @click="test">测试</button>
    <button @click="goLogin">跳转登录</button>
     <div class="userinfo" @click="bindViewTap">
       <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover"/>
       <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover"/>

       <div class="userinfo-nickname">
         <card :text="userInfo.nickName"></card>
       </div>
     </div>

     <div class="usermotto">
       <div class="user-motto">
         <card :text="motto"></card>
       </div>
     </div>

     <form class="form-container">
       <input type="text" class="form-control" :value="motto" placeholder="v-model"/>
       <input type="text" class="form-control" v-model="motto" placeholder="v-model"/>
       <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy"/>
     </form>

     <div class="all">
       <div class="left">
       </div>
       <div class="right">
       </div>
     </div>
  </div>
</template>

<script>
  import card from '@/components/card'
  import axios from "axios";

  export default {
    data() {
      return {
        motto: 'Hello miniprograme',
        userInfo: {
          nickName: 'mpvue',
          avatarUrl: 'http://mpvue.com/assets/logo.png'
        }
      }
    },

    components: {
      card
    },

    methods: {
      bindViewTap() {
        const url = '../logs/main'
        if (mpvuePlatform === 'wx') {
          mpvue.switchTab({url})
        } else {
          mpvue.navigateTo({url})
        }
      },
      clickHandle(ev) {
        console.log('clickHandle:', ev)
        // throw {message: 'custom test'}
      },
      test() {
        console.log("点击~");
        axios.post(
          "http://localhost:8888/erp-i/login",
          {params:123},
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        ).then((res) => {
          console.log(res,"res")
        });
        /*test().then((response) => {
          console.log(response, "response")
        }).catch(function (err) {
          console.log(err, 500)
        })*/
      },
      goLogin(){
        // this.$router.push({path:"/pages/logs/main",reLaunch: true })
        this.$router.push({path:"/pages/login/main",reLaunch: true })
        console.log(this.$router)
      }
    },

    created() {
      // let app = getApp()
    }
  }
</script>

<style scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 128 rpx;
    height: 128 rpx;
    margin: 20 rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

  .all {
    width: 7.5rem;
    height: 1rem;
    background-color: blue;
  }

  .all:after {
    display: block;
    content: '';
    clear: both;
  }

  .left {
    float: left;
    width: 3rem;
    height: 1rem;
    background-color: red;
  }

  .right {
    float: left;
    width: 4.5rem;
    height: 1rem;
    background-color: green;
  }
</style>
