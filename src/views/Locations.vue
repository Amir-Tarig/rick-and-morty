<template>
  <div class="card" v-for="loc in locations.results" :key="loc.id">
    <p>{{ loc.dimension }}</p>
    <p>{{loc.name}}</p>
    <p>{{loc.type}}</p>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup() {
    const locations = ref([])
    const error = ref(null)
    const loading = ref(false)

    function fetchLocations() {
        loading.value = true
          fetch("https://rickandmortyapi.com/api/location")
          .then(res => {
            if(!res.ok) {
              const error = new Error(res.statusText)
              error.json = res.json();
              throw error;
            }
            return res.json()
          })
          .then(data => {
            locations.value = data
            console.log(locations.value.results)
          })
          .catch(err => {
            error.value = err;
            if(err.json) {
              return err.json.then(mes => error.value.message = mes.message)
            }
          })
          .then(() => loading.value = false)
    }

    onMounted(() => {
       fetchLocations()
    })

    return {error, loading, locations, fetchLocations}
  }
}
</script>

<style scoped>
.card {
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  width: fit-content;

}
.card > * {
  color: white;
}
</style>