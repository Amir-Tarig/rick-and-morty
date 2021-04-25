<template>
    <TheHeroVideo />
   <Suspense>
     <template #default>
        <GetEpisodes />
     </template>
     <template #fallback>
       loading...
     </template>
   </Suspense>
</template>

<script>
import GetEpisodes from '../components/GetEpisodes.vue'

import TheHeroVideo from '../components/TheHeroVideo.vue'

export default {
  name: 'Home',
  components: {
    TheHeroVideo,
    GetEpisodes,
  },
}
</script>
