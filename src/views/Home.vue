<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="handleClick('back')">返回上一页 </button>
    <button @click="handleClick('push')">返回parent </button>
    <button @click="handleClick('replace')">替换到parent </button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    handleClick(type){
      if(type == "back"){
         this.$router.back()
      }else if(type == "push"){
        this.$router.push({
          name:'argu',
          params:{
            name:'lison'
          }

          // query:{
          //   name:'lison'
          // }
        });
      }else if(type == "replace"){
        this.$router.replace('/parent');
      }
      //

    }
  }
}
</script>
