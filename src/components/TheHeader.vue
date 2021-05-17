<template >
     <header  class="header" >
         <div class="logo">[ Rick & Morty ]</div>
       <nav >
            <div ref="navLink" class="nav-links">
                 <router-link @click="handle"   class="link" to="/">Home</router-link> 
                 <router-link @click="handle"   class="link" to="/characters">Characters</router-link> 
            </div>

            <div @click="handle" class="burger">
                <div class="line one"></div>
                <div class="line two"></div>
                <div class="line three"></div>
            </div>
       </nav>
     </header>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const navLink = ref(null)


        function handle(e) {
            // const one  = e.path[1].querySelector('.one')
            // const two  = e.path[1].querySelector('.two')
            // const three  = e.path[1].querySelector('.three')
            console.log(e)
            const container = e.target
            const links = navLink.value.querySelectorAll('.link')

            container.classList.toggle('change')
            navLink.value.classList.toggle('open')

           links.forEach(link => {
               link.classList.toggle('fade')
           });

        }

        return { handle, navLink }
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
    height: 100%;
    border: 1px solid red;
}

.nav-links {
    width: 100%;
    border: 1px solid red;
    height: 100%;
    display: flex;
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
    .logo {
        z-index: 5;
        border: 1px solid red ;
        position:absolute;
    }

    .nav-links {
        height: 25vh;
        background: #5b78c7;
        flex-direction: column;
        justify-content: initial;
        position: relative;
         clip-path: circle(0px at 92% 12%);
        -webkit-clip-path: circle(0px at 92% 12%);
        pointer-events: none;
        transition: all 1s ease-in-out ;
    }

    .link {
        color: white;
        font-size: 1.2rem;
        /* border: 1px solid red; */
        position: absolute;
        bottom: 40%;
        left: 50%;
        transform: translate(-50%,-40%);
        display: inline-block;
        letter-spacing: 2px;
        cursor: pointer;
        opacity: 0;
    }

    .nav-links.open {
        clip-path: circle(200% at 69% 12%);
        -webkit-clip-path: circle(100% at 69% 12%);
        pointer-events: all;
    }

    .link:nth-child(1) {
        transition: all .5s ease .4s;
    }

    .link:nth-child(2) {
        bottom: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
        transition: all .5s ease .6s;
    }

    .link.fade {
        opacity: 1;
    }

    .header nav {
        position: relative;
        width: 100%;
    }

  
    .burger {
        display: initial;
        cursor: pointer;
        position: absolute;
        right: 5%;
        top: 50%;
        transform: rotate(180deg) ;
        -webkit-transform: rotate(180deg) ;
        transform: translate(-5%, -50%);
        -webkit-transform: translate(-5%, -50%);
    }

    .line{
        width: 35px;
        height: 4px;
        background: black;
        margin-top: 5px;
        border-radius: 2px;
        transition: .5s ease-out .3s;
    }

    
    .change .one {
    -webkit-transform: rotate(-45deg) translate(-7px, 6px);
    transform: rotate(-45deg) translate(-7px, 6px);
    }

    .change .two {
        width: 0;
    }

    .change .three {
        -webkit-transform: rotate(45deg) translate(-7px, -6px) ;
        transform: rotate(45deg) translate(-7px, -6px) ;
    }
}
</style>