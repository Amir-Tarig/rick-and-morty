<template>
    <div v-if="error">Something went wrong please try again latter</div>
   <div v-else class="epi" v-for="char in character.results" :key="char.id">
       <img :src="char.image" alt="">
      <p>Name: {{ char.name }}</p>
      <p>Species: {{char.species}}</p>
      <p>Status: {{char.status}}</p>
      <p>Origin: {{char.origin.name}}</p>
      <p>Current location: {{char.location.name}}</p>
    </div>
    <div></div>
</template>

<script>
import AllCharacters from "../composables/AllCharacters"

export default {
  async setup() {
      const  { error, character, getCharacters } = AllCharacters();
      await getCharacters();

      console.log(character.value)

      return { character , error}
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
    color: white;
}
</style>