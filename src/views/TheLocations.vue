<template>
     <p class="resLoading" v-if="loading">Loading The Current Location Details</p>
      <p class="resError" v-if="error">Somthing Went Wrong We couldn't display the Current Location details !!!</p>
  <div class="location" v-for="loc in location" :key="loc.id">
      <p><span>Dimention : </span> {{ loc.dimension }}</p>
      <p><span>Name : </span> {{ loc.name }}</p>
      <p><span>Population : </span> {{ loc.residents.length }}</p>
      <p><span>Type : </span> {{ loc.type }}</p>
  </div> 

  <div  class="container">
      <p class="residentsLoading" v-if="residentsLoading">Loading residents</p>
      <p class="residentsError" v-if="residentsError">We couldn't display the residents please try again later !!!</p>
        <div class="charContainer" v-for="res in residents" :key="res.id">
            <div class="imgContainer"><img :src="res.image" alt=""></div>
            <ul  class="details">
                <li>{{res.name}}</li>
                <li>{{res.species}}</li>
                <li>{{res.status}}</li>
            </ul>
        </div>
  </div>
</template>

<script>
import { onMounted,  ref } from 'vue';

export default {
  props: {
    originName: String
  },

 setup(props) {
  const loading = ref(false)
  const location = ref([])
  const error = ref(null)

  const residentsLoading = ref(false)
  const residents = ref([])
  const residentsError = ref(null)


  function fetchChar(url) {
    residentsLoading.value = true
    let obj = [...url]

    obj.map(char => {
      fetch(char)
      .then(res => {
        if(!res.ok) {
          const error = new Error (res.statusText)
          error.json = res.json()
          throw error
        }
        return res.json()
      })
      .then(data => {
        residents.value.push(data)
        })
        .catch((err) => {
          residentsError.value = err
          if(err.json) {
            return err.json.then(mes => {
              residentsError.value.message = mes.message
            })
          }
        })
        .then(() => residentsLoading.value = false)
    })
  } 


  function fetchData() {
    loading.value = true;
    return fetch(`https://rickandmortyapi.com/api/location/?name=${props.originName}`)
    .then(res => {
      if(!res.ok) {
        const error = new Error(res.statusText);
        error.json = res.json()
        throw error;
      }
      return res.json()
    })
    .then(data =>{
       location.value = data.results
       console.log(location.value)
      //  residents.value = location.value[0].residents
      //  fetchResidents([...location.value[0].residents])
      fetchChar(location.value[0].residents)
    })
    .catch(err => {
      error.value = err;
      if(err.json) {
        return err.json.then(json => {
          error.value.message = json.message;
        })
      }
    })
    .then(() => loading.value = false)
  } 

 onMounted(() => {
   fetchData()
})


  return { location, error, loading, residents, residentsError, residentsLoading }
 }
}
</script>

<style scoped>
.location {
  padding: 1em 0;
  line-height: 2;
  width: fit-content;
  margin: auto;
}

.location p {
  font-size: 1.1em;
}

.location span {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 1.1em;
}

.container {
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 80vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
  /* scrollbar-width: none; */;
}


.container::-webkit-scrollbar {
  width: 0;
}


.charContainer {
  display: flex;
  flex-direction: column;
  margin: .5em;
  align-items: center;
  padding: 1em 0;
  transition: .5s ease-in-out;
  scroll-snap-align: start;
}


.details {
  list-style-type: circle;
  list-style-position: inside;
  background: rgba(255, 255, 255, .1);
  color: white;
  /* border: 1px solid red; */
  width: 100%;
  line-height: 1.5;
}


.imgContainer{
  width: 200px ;
}

.imgContainer img{
  width: 100%;
  border-radius: 20px;
}

div {
    color: white;
}

.div{
  background: rgba(255, 255, 255, .5);
  border: 1px solid red;
  height: 400px;
}

.resLoading, .resError, .residentsLoading, .residentsError{
  color: white;
  text-align: center;
  padding-top: 2em;
}

@media screen and (max-width: 500px) {
  .location p {
    padding-left: 1em;
  }
}
</style>