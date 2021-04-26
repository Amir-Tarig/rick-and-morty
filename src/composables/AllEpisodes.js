import { reactive, toRefs } from 'vue' 

export default function allEpisodes() {
    const state = reactive({
        error: null,
        episodes: null
    })

    const getEpisodes = async() => {
        try{
            const episodesRes = await fetch ("https://rickandmortyapi.com/api/episode")
            state.episodes = await episodesRes.json()
        }
        catch(e) {
            state.error = e
        }

    }
    return { ...toRefs(state),  getEpisodes }
}