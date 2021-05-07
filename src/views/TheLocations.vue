<template>
  <div>dfdfdfd</div> 
 <router-view ></router-view>
</template>

<script>
import { onMounted, getCurrentInstance } from 'vue';


export default {
 setup() {

   const internalInstance = getCurrentInstance(); 
       const emitter = internalInstance.appContext.config.globalProperties.emitter;

  onMounted(() => {
    emitter.on('location', (url) => {console.log(url)})
  })
 }
};
</script>

<style scoped>
div {
    color: white;
}
</style>