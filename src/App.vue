<template >
<TheHeader />
 <router-view :key="$route.path"/>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  components: {
    TheHeader,
  }, 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');
* , *::before, *::after{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: white black;
}


body{
  background: black;
  font-family: 'Montserrat', sans-serif;
}

body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: black;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: white;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  /* border: 3px solid orange;  creates padding around scroll thumb */
}
</style>
