<template>
       <div class="error" v-if="error">Something went wrong please try again latter</div>
     <Suspense v-else>
        <template #default>
            <AsyncCharacters />
        </template>
        <template #fallback>
          <div class="loading">loading...</div>
        </template>
     </Suspense>
</template>

<script>
import { ref, onErrorCaptured, defineAsyncComponent } from 'vue'
const AsyncCharacters = defineAsyncComponent(() => import(/*webpackChunkName: "AllCharacter"*/ "../components/TheCharacters.vue"))

export default {
  components: { AsyncCharacters },
   setup() {
    const error = ref(null)

    onErrorCaptured(e => {
      error.value = e
    })

  return { error }
  }
}
</script>

<style scoped>
.error {
  color: white;
}

.loading{
  color: white;
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
