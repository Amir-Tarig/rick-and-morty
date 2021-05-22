<template>
  <div class="video">
          <iframe  width="560" height="315" src="https://www.youtube.com/embed/F6Zy_mLgSNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h1>OFFICIAL TRAILER #1: Rick and Morty Season 5 | adult swim</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.video {
  width: 70%;
  max-width: 100%;
  height: 70vh;
  /* margin: auto; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.video iframe {
  width: 100%;
  max-width: 100%;
  height: 100%;
}

.video h1 {
  color: white;
  margin-top: 1em;
}
</style>