import { ref } from 'vue' 

export default function allEpisodes() {
    const error = ref(null)
    const episodes = ref(null)

    const getEpisodes = async() => {
        try{
            const episodesRes = await fetch ("https://rickandmortyapi.com/api/episode")
            episodes.value = await episodesRes.json()
        }
        catch(e) {
            error.value = e
        }

    }
    return { error, episodes, getEpisodes }
}