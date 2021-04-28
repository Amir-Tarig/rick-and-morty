<template>
 <div class="charContainer">
        <div class="error" v-if="error">Something went wrong please try again latter</div>
       <div v-else  class="innerWrapper" v-for="char in character.results" :key="char.id">
                      <img class="artWork" :src="char.image" :alt="char.name + ' ' + 'image'">
                      <div class="charDetails">
                            <p><span>Name :</span>  {{ char.name }}</p>
                            <p><span>Species :</span>  {{char.species}}</p>
                            <p><span>Status :</span>  {{char.status}}</p>
                            <p><span>Origin :</span>  {{char.origin.name}}</p>
                            <p><span>Current location :</span>  {{char.location.name}}</p>
                      </div>
        </div>
 </div>
</template>

<script>
import AllCharacters from "../composables/AllCharacters"
// import {ref } from 'vue'

export default {
async setup() {
         const  { error, character, getCharacters } =  AllCharacters();
          await getCharacters();
    //   console.log(character.value.results)

      return { character , error }
  }
}
</script>

<style scoped>
.error {
    color: white;
}


.charContainer {
    /* border: 1px solid red; */
    color: white;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(500px, 1fr) );
   grid-gap: 20px;
   padding:  1em;
   position: relative;
   top: 10%;
}

.artWork{
    width: 100%;
}

.innerWrapper{
    background: rgba(255, 255, 255, .1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 20px;
    align-items: center;
    /* border: 1px solid red; */
    border-radius: 40px;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
}

.charDetails {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.charDetails p span {
    font-weight: 700;
    color: #FF5500;
}
</style>