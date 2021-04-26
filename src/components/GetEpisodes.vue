<template>
    <div v-if="error">Something went wrong please try again latter</div>
   <div v-else class="epi" v-for="epi in episodes.results" :key="epi.id">
      <p>{{ epi.name }}</p>
    </div>
</template>

<script>
import allEpisodes from "../composables/AllEpisodes"

export default {
  async setup() {
      const  { error, episodes, getEpisodes } = allEpisodes();
      await getEpisodes();

      console.log(episodes.value)

      return { episodes , error}
  }
}
</script>

<style scoped>
.epi {
    border: 1px solid red;
}
p {
    font-size: 2em;
    border: 1px solid red;
}
</style>