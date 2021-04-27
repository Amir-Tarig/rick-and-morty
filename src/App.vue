<template>
<TheHeader /><br>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }, 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');
* , *::before, *::after{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body{
  background: black;
  font-family: 'Montserrat', sans-serif;
}
</style>
