<template>
     <header  class="header" >
         <div class="logo">[ Rick & Morty ]</div>
       <nav>
             <router-link class="link" to="/">Home</router-link> 
             <router-link class="link" to="/characters">Characters</router-link> 
             <router-link class="link" to="/locations">Locations</router-link> 
       </nav>
       <!-- <form  id="form" v-show="visible">
           <input type="text"   placeholder="Search characters" >
           <button id="btn" aria-label="search" type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path d="M19.7,18.3L16,14.6A9.1,9.1,0,0,0,18,9a9,9,0,1,0-9,9,8.53,8.53,0,0,0,5.6-2l3.7,3.7a1,1,0,0,0,1.4,0A1,1,0,0,0,19.7,18.3ZM2,9A7,7,0,0,1,16,9a7,7,0,0,1-2,4.9h0a6.8,6.8,0,0,1-4.9,2A6.84,6.84,0,0,1,2,9Z"></path></svg></button>
       </form> -->
     </header>
     <router-view/>
</template>

<script>
// import {ref, watchEffect } from 'vue'
// import {useRouter } from 'vue-router'

export default {
//  setup() {
//     const router = useRouter()
//     let visible = ref(null);
  
//     watchEffect(()  => {
//         if(router.currentRoute.value.fullPath === "/characters") {
//             visible.value = 1
//         } else { visible.value = 0 }
//     })

   
//     return {visible }
//   },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montez&family=Montserrat:wght@300;400&display=swap');
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    background: whitesmoke;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    width: 100%;
    z-index: 10;
}

.header nav {
    width: 30%;
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
}


.link {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    position: relative;
    padding: .3em  0;
    font-size: 14px;
}

 .link::before {
    content: " ";
    position: absolute;
    background: violet;
    width: 0;
    height: 2px;
    bottom: 0;
    transition: .5s ;

}

.link:hover::before{
    width: 95%;
}

.logo{
    height: 100%;
    padding-top: .3em;
    padding-left: 1em;
    padding-right: 1em;
    background: #222;
    color: whitesmoke;
    font-family: 'Montez', cursive;
    font-size: 1.4em;
}
/* 
.header form {
    height: 80%;
    display: flex;
    padding-right: 1em;
}

form input[type=text] {
    order: 1;
    appearance: none;
    background: none;
    border: none;
    outline: none;
    padding: 5px;
}

#btn{
    background: none;
    outline: none;
    border: none;
    padding: .5em;
}

#btn:hover{
    cursor: pointer;
} */

</style>