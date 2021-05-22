<template>
  <div class="footer">
     <div class="icons">
          <div class="github icon">
           <a href="https://github.com/MiroPhoenix/rick-and-morty"><img src="@/assets/github.svg" alt=""></a> 
          </div>
          <div class="fackbook icon">
            <img src="@/assets/fackbook.svg" alt="">
          </div>
          <div class="twitter icon">
            <img src="@/assets/twitter.svg" alt="">
          </div>
          <div class="youtube icon">
            <img src="@/assets/youtube.svg" alt="">
          </div> 
     </div>

      <div class="copyright">
        <p>&copy; 2021 Miro , For Development Purposes Only, All Rights Reserved.</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  color: white;
  margin-top: 2em;
  height: 30vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: .5em;
}

.copyright {
  width: fit-content;
}

.icons {
  display: flex;
  margin-bottom: 20px;
 position: relative;
}

.icon {
  background: white;
  width: 3.5em;
  height: 3.5em;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  transition: all .3s ease-in-out;
  cursor: pointer;
}

.github img {
  display: block;
  width: 32px;
}

.fackbook img {
  display: block;
  width: 17px;
}

.twitter img {
  display: block;
  width: 27px;
}

.youtube img {
  display: block;
  width: 30px;
}

.icon:hover {
  transform: translateY(-20px);
}

</style>