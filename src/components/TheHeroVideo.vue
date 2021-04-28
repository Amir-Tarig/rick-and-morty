<template>
 <div class="container">
      <h1>Season 5 Starts Sunday, June 20</h1>
      <p>Stay tuned</p>
        <div class="rickImg"><img  src="@/assets/fuckyou.png" alt=""></div>
            <div class="wrapper">
                    <video autoplay loop muted>
                        <source src="@/assets/tinyrick.mp4">
                    </video>
                <img src="https://media.cdn.adultswim.com/uploads/20200317/203171153217-rick-and-morty.png" alt="Rick and Morty">
         <div class="btnContainer">
            <button class="btn">CHARACTERS</button>
            <button class="btn"> LOCATIONS</button>
          </div>
        </div>
 </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container {
    /* border: 1px solid red; */
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
    /* border: 1px solid red; */
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
    /* border: 1px solid red; */
    
}

.rickImg img{
    width: 100%;
}

.btnContainer {
    /* border: 1px solid red; */
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
</style>