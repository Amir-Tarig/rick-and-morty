<template>
    <h1 >Season 5 Starts Sunday, June 20</h1>
    <TheHeroVideo />
    <!-- <div v-if="error">Something went wrong please try again latter</div>
   <Suspense v-else>
      <template #default>
          <AsyncEpisodes />
      </template>
      <template #fallback>
        loading...
      </template>
   </Suspense> -->
</template>

<script>
import TheHeroVideo from '../components/TheHeroVideo.vue'
// import { ref } from 'vue'
// const AsyncEpisodes = defineAsyncComponent(() => import(/*webpackChunkName: "AllEpisode"*/ "../components/GetEpisodes.vue"))
export default {
  name: 'Home',
  components: {
    TheHeroVideo,
    // AsyncEpisodes,
  },
  // setup() {
  //   const error = ref(null)

  //   onErrorCaptured(e => {
  //     error.value = e
  //   })

  // return {error}
  // }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap');

h1 {
    color: white;
    display: inline-block;
    
    transform: translate(-50%,-10%);
    font-size: 3em;
    font-family: 'Lora', serif;
}
</style>
