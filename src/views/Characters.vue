<template>
       <div v-if="error">Something went wrong please try again latter</div>
     <Suspense v-else>
        <template #default>
            <AsyncCharacters />
        </template>
        <template #fallback>
          loading...
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

  return {error}
  }
}
</script>
