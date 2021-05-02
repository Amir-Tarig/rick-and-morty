<template>
 <div class="body">
          <form  id="form" @submit.prevent="handleSearch">
               <input type="text" v-model="inputValue"  placeholder="Search characters" >
               <button id="btn" aria-label="search" type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path d="M19.7,18.3L16,14.6A9.1,9.1,0,0,0,18,9a9,9,0,1,0-9,9,8.53,8.53,0,0,0,5.6-2l3.7,3.7a1,1,0,0,0,1.4,0A1,1,0,0,0,19.7,18.3ZM2,9A7,7,0,0,1,16,9a7,7,0,0,1-2,4.9h0a6.8,6.8,0,0,1-4.9,2A6.84,6.84,0,0,1,2,9Z"></path></svg></button>
           </form> 
         <transition-group tag="div" appear @before-enter="beforeEnter" @enter="enter" class="charContainer" >
            <div key="error" class="error" v-if="error">Something went wrong please try again later</div>
            <div key="loading" v-if="loading" class="loading">loading...</div>
            <div key="matching" v-if="!noMatching" class="noMatching">Sorry, no matching found.!!</div>
               <div v-else class="innerWrapper" v-for="(char, index) in character.results" :data-index="index" :key="char.id">
                             <img :key="char.id" class="artWork" :src="char.image" :alt="char.name + ' ' + 'image'">
                             <div :key="char.id" class="charDetails">
                                    <p><span>Name :</span>  {{ char.name }}</p>
                                    <p><span>Species :</span>  {{char.species}}</p>
                                    <p><span>Status :</span>  {{char.status}}</p>
                                    <p><span>Origin :</span>  {{char.origin.name}}</p>
                                    <p><span>Current location :</span>  {{char.location.name}}</p>
                            </div>
                </div>
         </transition-group>
 </div>
 <div @click="fetchPage" class="arrows">
     <span  class="rightA">&#187;</span>
     <span  class="leftA">&#171;</span>
 </div>
</template>

<script>

import { onMounted, ref } from 'vue'
import gsap from 'gsap'
export default {
 setup() {
       let API = `https://rickandmortyapi.com/api/character/`
       let character = ref([])
       const error = ref(null)
       const loading = ref(false)
       let nextPage = ref('')
       let prevPage = ref('')
       const inputValue = ref(null)
       let noMatching = ref(true)

       const beforeEnter = (el) => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(100px)'
       }

       const enter = (el , done) => {
           gsap.to(el, {
               opacity: 1,
               y: 0,
               duration: 0.8,
               onComplete: done,
               delay: el.dataset.index *  0.2
           })
       }

       function handleSearch() {
           character.value = []
           fetch(API + `?name=${inputValue.value}`)
           .then((res) =>{
               if(!res.ok) noMatching.value = false;
               else noMatching.value = true;
                return res.json()
           })
           .then(data => character.value = data)
       }

       function fetchPage(e) {
           if(e.target.classList == "rightA") {
               if(character.value.info.next !== null){
                   console.log(character.value.info.next)
                   nextPage.value = character.value.info.next
                   character.value = []
                   fetch(nextPage.value)
                   .then(res => res.json())
                   .then(char => character.value = char)
               }
           } else if (e.target.classList == "leftA") {
                if(character.value.info.prev !== null){
                    console.log(character.value.info.prev)
                   prevPage.value = character.value.info.prev
                   character.value = []
                   fetch(prevPage.value)
                   .then(res => res.json())
                   .then(char => character.value = char)
               }
           }
       }


        function fetchData () {
            loading.value = true;

                fetch (API)
                .then(res => {
                    if(!res.ok){
                        const error =  new Error(res.statusText)
                        error.json = res.json();
                        throw error;
                    }
                    return res.json()
                })
                .then(char => character.value = char)
                .catch((err) => {
                    error.value = err;
                    if(err.json) {
                        return err.json.then(mes => {
                            error.value.message = mes.message
                        })
                    }
                })
                .then(() => {
                    loading.value = false
                })
        }
           onMounted(() => {
               fetchData()
           })

        return {noMatching ,beforeEnter, enter, character, error ,loading, fetchPage, nextPage, prevPage, handleSearch, inputValue }
  }
}
</script>

<style scoped>
.body {
    max-height: 100%;
    min-height: 100vh;
}

.error , .loading, .noMatching{
    color: white;
    width: fit-content;
    margin: auto;
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
    background: rgba(255, 255, 255, 0.06);
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


form {
    display: flex;
    padding: 1em;
    width: 20rem;
    margin: auto;
}

form input[type=text] {
    order: 1;
    appearance: none;
    color: white;
    background: none;
    border: 1px solid white;
    /* box-shadow: 0 0 5px rgba(255, 255, 255, .5); */
    outline: none;
    padding: 0 2em 0 10px;
    border-left: none;
    width: 100%;
}

::placeholder {
    color: whitesmoke;
    text-transform: uppercase;
}

#btn{
    background: none;
    outline: none;
    padding: .5em;
    border: 1px solid white;
    border-right: none;
    border-bottom-left-radius: 20px;

}

#btn:hover{
    cursor: pointer;
}

#btn svg {
    fill: whitesmoke;
}

.arrows{
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    bottom: 0;
    width: 100%;
}

.arrows p {
    color: white;
}

.rightA{
   font-size: 4em;
   color: #888888;
   height: fit-content;
   order: 1;
   cursor: pointer;
}

.leftA{
   font-size: 4em;
   color: #888888;
   height: fit-content;
   cursor: pointer;
}

.leftA:hover , .rightA:hover {
    color: white;
}
</style>
