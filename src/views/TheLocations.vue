<template>
  <div v-for="loc in location" :key="loc.id">
      <p>Dimention: {{ loc.dimension }}</p>
      <p>Name: {{ loc.name }}</p>
      <p>Type: {{ loc.type }}</p>
  </div> 

  <div class="container">
    <div class="resLoading" v-if="residentsLoading">Loading Location residents...</div>
    <div class="resError" v-else-if="residentsError">Something went wrong pleace try again later</div>

    <div class="div" >
      <div class="characterContainer" v-for="char in residents" :key="char.id">
        <div class="imgContainer"><img :src="char.image" alt=""></div>
      </div>
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
  const residents = ref([])
  const residentsLoading = ref(false)
  const residentsError = ref(null)

  function fetchData() {
    loading.value = true;
    return fetch(`https://rickandmortyapi.com/api/location/?name=${props.originName}`,{
      method: 'get',
      headers: {'content-type': 'application/json'}
    })
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
       fetchResidents([...location.value[0].residents])
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

  function fetchResidents(residents){
    residentsLoading.value = true

     const char = residents
     char.map(el => {
       fetch(el)
       .then(res => {
         if(!res.ok) {
           const error = new Error (res.statusText)
           error.json = res.json()
           throw error
         }
         return res.json()
       })
       .then(data => {
         residents.value = data;
         console.log(residents.value.image)
       })
       .catch(err => {
          residentsError.value = err
          if(err.json) {
            return err.json.then(json => {
              residentsError.value = json.message
            })
          }
       })
       .then(() => residentsLoading.value = false)
     })
  }

  onMounted(() => {
    fetchData()
  })

  return {location, error, loading, residents, residentsError, residentsLoading }
 }
};
</script>

<style scoped>



div {
    color: white;
}

.div{
  background: rgba(255, 255, 255, .5);
  border: 1px solid;
}

.resLoading, .resError{
  color: white;
}
</style>