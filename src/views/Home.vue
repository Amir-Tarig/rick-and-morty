<template>
      <h1>Season 5 Starts Sunday, June 20</h1>
      <TheHeroVideo />
   <div class="trailerContainer">
     <div id="video">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/F6Zy_mLgSNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
      <div id="dis">
         <h2>RICK AND MORTY SEASON 5 UNCENSORED TRAILER!</h2>
         <p>Now you can start asking us about season 6. Rick and Morty returns for season 5 on Sunday, June 20 at 11pm ET/PT on Adult Swim.</p>
          <button class="btn">Play</button>
      </div>
   </div>

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
    margin-top: 8%;
    margin-bottom:2%;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    font-size: 3rem;
    font-family: 'Lora', serif;
}

.trailerContainer{
  /* border: 1px solid red; */
  margin-top: 8%;
  color: white;
  display: flex;
  justify-content: center;
  padding: 0 1em;
}

#video{ 
  width: 40rem;
  height: 500px;
  /* border: 1px solid red; */
}

#video iframe{
  width: 100%;
  height: 100%;
}

#dis{
  /* border: 1px solid red; */
 height: 200px;
 line-height: 2;
 margin-left: 2em;
 margin-top: 2.5%;
}

#dis h2{
  font-size: 2em;
}

.btn {
  margin-top: 3%;
  padding: .5em 6em;
  background: none;
  border: 1px solid white;
  outline: none;
  color: white;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
}
</style>
