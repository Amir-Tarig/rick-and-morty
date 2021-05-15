<template >
     <header  class="header" >
         <div class="logo">[ Rick & Morty ]</div>
       <nav >
             <router-link  class="link" to="/">Home</router-link> 
             <router-link  class="link" to="/characters">Characters</router-link> 
       </nav>

       <div @click="handle" class="burger">
           <div class="line one"></div>
           <div class="line two"></div>
           <div class="line three"></div>
       </div>
     </header>
</template>

<script>
// import {ref} from 'vue'

export default {
    setup() {

        function handle(e) {
            // const one  = e.path[1].querySelector('.one')
            // const two  = e.path[1].querySelector('.two')
            // const three  = e.path[1].querySelector('.three')
            const container = e.path[1]
            container.classList.toggle('change')
        }

        return { handle }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montez&family=Montserrat:wght@300;400&display=swap');
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6vh;
    background: whitesmoke;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    width: 100%;
    z-index: 10;
    border: 1px solid red;
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

.burger {
    display:  none;
}

@media screen and (max-width: 800px) {
    .header nav {
        display: none;
    }

    .burger {
        display: inline-block;
        cursor: pointer;
        /* border: 1px solid red; */
        position: relative;
        right: 10px;
        transform: rotate(180deg);
    }

    .line{
        width: 35px;
        height: 4px;
        background: black;
        margin-top: 5px;
        border-radius: 2px;
        transition: .5s;
    }
    .change .one {
    -webkit-transform: rotate(-45deg) translate(-7px, 6px);
    transform: rotate(-45deg) translate(-7px, 6px);
    background: red;
    }

    .change .two {
        width: 0;
    }

    .change .three {
        -webkit-transform: rotate(45deg) translate(-7px, -6px) ;
        transform: rotate(45deg) translate(-7px, -6px) ;
        background: red;
    }
}
</style>