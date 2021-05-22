<template>
      <TheHeroVideo />
    <div class="trailerContainer">
          <router-link :to="{ name: 'TheOfficialTrailer' }"><div id="image">
         <img src="@/assets/Rick-and-Morty-Season-5-Trailer.webp" alt="">
        </div></router-link>

        <div id="dis">
            <h2>RICK AND MORTY SEASON 5 UNCENSORED TRAILER!</h2>
            <p>No time to unpack this. Rick and Morty returns on Sunday, June 20 at 11pm ET/PT on Adult Swim.</p>
           <router-link :to="{ name: 'TheOfficialTrailer' }"> <button class="btn">Play</button></router-link>
        </div>
   </div>
   <Footer/>
<router-view></router-view>
</template>

<script>
import Footer from '../components/footer.vue'
import TheHeroVideo from '../components/TheHeroVideo.vue'

export default {
  name: 'Home',
  components: {
    TheHeroVideo,
    Footer,
  },

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap');
.trailerContainer {
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  padding: .5em;
  margin-top: 2em;
}

#dis  {
  color: white;
  /* border: 1px solid red; */
  line-height: 1.5;
}

#dis h2 {
  font-size: 2rem;
}

#image {
  display: flex;
  justify-content: center;
  position: relative;
  transition: all .5s ease;
  cursor: pointer;
}

#image:hover {
  border: none;
}

#image::before {
  content: '';
  position: absolute;
  background: rgba(255, 255, 0,0.3);
  transition: all .5s ease;
}

#image:hover::before {
  border: 3px solid #ffcc00;
  width: 100% ;
  height: 100%;
}

#image img{
  width: 100%;
  max-width: 100%;
}

.btn {
  margin-top: 5%;
  padding: .5em 6em;
  background: none;
  border: 1px solid white;
  outline: none;
  color: white;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
} 

.btn:hover {
  background: #ffcc00;
  color: black;
  border: none;
}

#dis p, #dis h2 {
  margin-bottom: .2em;
}

@media screen and (max-width: 768px) {
  .trailerContainer {
    grid-template-columns: 1fr;
  }
}
/* 

.trailerContainer{
  border: 1px solid red;
  margin-top: 8%;
  color: white;
  display: flex;
  justify-content: center;
  padding: 0 1em;
}

#video{ 
  width: 40rem;
  height: 500px;
  border: 1px solid red;
}

#video iframe{
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
}

#dis{
  border: 1px solid red;
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
} */
</style>
