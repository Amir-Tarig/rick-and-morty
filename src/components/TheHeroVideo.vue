<template>
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
    <div class="btnContainer">
        <button class="btn">CHARACTERS</button>
        <button class="btn">LOCATIONS</button>
    </div>
</div>

 <!-- <div class="container">
                    <video autoplay loop muted>
                        <source src="@/assets/tinyrick.mp4">
                    </video>

            <div class="wrapper">
         <div class="btnContainer">
            <button class="btn">CHARACTERS</button>
            <button class="btn"> LOCATIONS</button>
          </div>
        </div>
 </div> -->
</template>

<script>
export default {

}
</script>

<style scoped>

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

.container {
    border: 1px solid red;
    width: 100%;
    max-width: 100%;
    height: 60vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.videoContainer {
    border: 1px solid yellow;
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
    border:  1px solid red;
    width: 40%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}


.btn {
    padding: .6em 2em;
    color: whitesmoke;
    background: none;
    outline: none;
    border: 1px solid white;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 1px;
    transition: .3s ease-in-out;
    border-radius: 5px;
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
    }

    .btn {
        padding: .5em 1.2em;
    }

    .image img{
        display: none;
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
}

@media screen and (max-width: 320px) {
    .btnContainer {

    }

    .btn {
        padding: .4em .7em;
    }
}


/* 
.container {
    border: 1px solid red;
    position: relative;
}

.container  h1 {
    color: white;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%, 5%);
    font-size: 3rem;
    font-family: 'Lora', serif;
}

.container p {
    color: white;
    position: absolute;
    left: 50%;
    top: 18%;
    transform: translate(-50%, 18%);
}

.wrapper  {
    width: 100%;
    position: relative;
    border: 1px solid red;
}

.wrapper video {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 4 / 1;
    
}

.wrapper img{
    display: block;
    position: absolute;
    top: 30%;
    left: 5%;
    width: 30;
    max-width: 100%;
    width: 500px;
}

.rickImg{
    width: 200px;
    transform: rotateY(180deg);
    margin-left: auto;
    border: 1px solid red;
    
}

.rickImg img{
    width: 100%;
}

.btnContainer {
    border: 1px solid red;
    position: absolute;
    bottom: -20%;
    left: 5%;
    width: 30rem;
    display: flex;
    justify-content: space-between;
}

.btn {
    padding: .6em 2em;
    color: whitesmoke;
    background: none;
    outline: none;
    border: 1px solid white;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 1px;
    transition: .3s ease-in-out;
    border-radius: 5px;
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

@media screen  and (max-width: 1400px){
  .container h1 {
    font-size: 2em;
  }
}

@media screen  and (max-width: 1024px){
  .container h1 {
    font-size: 2em;
  }
  .btnContainer {
      bottom: -30%;
  }
} */
</style>