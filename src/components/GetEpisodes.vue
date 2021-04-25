<template>
   <div class="epi" v-for="epi in episodes.results" :key="epi.id">
      <p>{{ epi.name }}</p>
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
    
    
    /* background: black; */
}
p {
    font-size: 2em;
    border: 1px solid red;
}
</style>