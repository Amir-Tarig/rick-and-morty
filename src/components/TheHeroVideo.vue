<template>
<div class="app">
    <div class="headerContainer">
        <div class="header">
              <h1>Season 5 Starts Sunday, June 20</h1>
              <p>Stay tuned</p>
        </div>
        <div class="image">
            <img  src="@/assets/fuckyou.png" alt="">
        </div>
    </div>
    
    <div class="container">
        <div class="videoContainer">
            <video autoplay loop muted>
                <source src="@/assets/tinyrick.mp4">
                <img src="https://media.cdn.adultswim.com/uploads/20200317/203171153217-rick-and-morty.png" alt="Rick and Morty">
            </video>
        </div>
            <img class="rmImg" src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png" alt="">
        <div class="btnContainer">
            <button class="btn">CHARACTERS</button>
            <!-- <button class="btn">LOCATIONS</button> -->
        </div>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>

.app {
    height: 85vh;
}

.headerContainer {
    color: white;
    display: grid;
    grid-template-columns: 1fr 150px;
    justify-items: center;
    align-items: center;
}

.header{
    text-align: center;
    line-height: 2;
}

.image {
    transform: rotateY(180deg);
}

.image img {
    width: 100%;
    height: 100%;
}

.rmImg{
    position: absolute;
    top: 20%;
    left: 0;
}

.container {
    width: 100%;
    max-width: 100%;
    height: 60vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    padding: 0 1em;
}

.videoContainer {
    width: 100%;
    height: 80%;
}

.videoContainer video {
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
}

.btnContainer {
    width: 24%;
    display: flex;
    justify-content: center;
    padding-left: 20px;
}


.btn {
    padding: .5em 4em;
    color: whitesmoke;
    background: none;
    outline: none;
    border: 1px solid white;
    cursor: pointer;
    font-weight: 700;
    font-size:1rem;
    transition: .3s ease-in-out;
    border-radius: 5px;
    letter-spacing: 1px;
}

.btn:first-of-type{
    color: black;
    background: #F3F4F5;
    border: none;
}

.btn:first-of-type:hover{
    background: none;
    color: whitesmoke;
}

.btn:last-of-type:hover{
    border: none;
}

.btn:hover {
    transform: scale(1.1);
    box-shadow: 2px 2px 10px whitesmoke;
}

@media screen and (max-width: 1200px) {
    .btnContainer {
        width: 50%;
        justify-content: space-between;
        margin: 0 auto;
    }
    .rmImg{
       width: 400px;
       top: 50%;
    }

    .btnContainer {
        justify-content: center;
    }
}

@media screen and (max-width: 800px) {
    .headerContainer {
        grid-template-columns:  1fr 120px;
    }
    .btnContainer {
        width: 100%;
        justify-content: space-around;
    }
}

@media screen and (max-width: 600px) {
      .headerContainer {
        grid-template-columns: 1fr ;
        padding: .5em 0;
    }

    .header h1 {
        font-size:  1.5em;
    }
    .btnContainer {
        width: 100%;
        justify-content: space-around;
        padding: 0 10px;
    }

    .btn {
        padding: .5em 1.2em;
    }

    .image img{
        display: none;
    }

    .rmImg {
        width: 250px;
        top: 60%
    }
}

@media screen and (max-width: 400px) {
  
    .header {
        padding: 0 10px;
    }
    .header h1 {
        font-size:  1.5em;
    }
    .btnContainer {
        width: 100%;
        justify-content: space-between;
    }

    .btn {
        padding: .4em 1em;
    }

    .image img{
        display: none;
    }

    .container {
        justify-content: space-around;
    }

    .videoContainer {
        height: 60%;
    }

    .rmImg {
        width: 150px;
        top : 30%;
        left: -10%;
        display: inline-block;
        margin-left: 0;
        transform: rotate(-90deg);
    }
}

@media screen and (max-width: 320px) {

  
    .btn {
        padding: .4em .7em;
        letter-spacing: 0;
    }
}

</style>