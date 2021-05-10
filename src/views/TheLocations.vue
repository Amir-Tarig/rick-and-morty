<template>
  <div v-for="loc in location" :key="loc.id">
      <p>Dimention: {{ loc.dimension }}</p>
      <p>Name: {{ loc.name }}</p>
      <p>Type: {{ loc.type }}</p>
  </div> 

  <div class="container">
    <p class="resLoading" v-if="residentsLoading">Loading residents</p>
    <p class="resError" v-if="residentsError">Something went wrong, Please try again later !!!</p>
   
    <div class="charContainer" v-for="res in residents" :key="res.id">
      <div class="imgContainer"><img :src="res.image" alt=""></div>
      <ul class="details">
          <li>{{res.name}}</li>
          <li>{{res.species}}</li>
          <li>{{res.status}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

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
          const error = new Error(res.statusText)
          error.json = res.json()
          throw Error
        }
        return res.json()
      })
      .then(data => {
        residents.value.push(data)
        console.log(data)
        })
        .catch((err) => {
          residentsError.value = err
          if(err.json) {
            return err.json.then(json => {
              residentsError.value.message = json.message
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
};
</script>

<style scoped>
.details {
  list-style-type: none;
}

.imgContainer img{
  width: 100%;
}

div {
    color: white;
}

.div{
  background: rgba(255, 255, 255, .5);
  border: 1px solid red;
  height: 400px;
}

.resLoading, .resError, .residentsLoading{
  color: white;
}
</style>