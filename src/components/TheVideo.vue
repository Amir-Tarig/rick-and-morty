<template>
<div class="wrapper">
    <div class="innerWrapper"></div>
        <video autoplay loop muted>
            <source src="@/assets/tinyrick.mp4">
        </video>
    <img src="https://media.cdn.adultswim.com/uploads/20200317/203171153217-rick-and-morty.png" alt="Rick and Morty">
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper  {
    width: 100%;
    position: relative;
    top: 0;
}

.wrapper video {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 4 / 1;
}

.innerWrapper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    z-index: 3;
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
</style>