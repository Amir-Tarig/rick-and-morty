<template>
   <div class="epi" v-for="epi in episodes.results" :key="epi.id">
      <p>{{epi.id}}</p><br>
    </div>
</template>

<script>
import allEpisodes from "../composables/AllEpisodes"

export default {
  async setup() {
      const  { error, episodes, getEpisodes } = allEpisodes();
      await getEpisodes();

      console.log(episodes.value.results[0])

      return { episodes , error}
  }
}
</script>

<style scoped>
.epi {
    border: 1px solid red;
    height: 100vh;
    width: 100%;
    position: absolute  ;
    top: 50%;
    /* background: black; */
}
p {
    font-size: 2em;
    border: 1px solid red;
}
</style>