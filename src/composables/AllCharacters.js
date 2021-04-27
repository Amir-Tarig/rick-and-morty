import { reactive, toRefs } from 'vue' 

export default function allCharacters() {
    const state = reactive({
        error: null,
        character: null
    })

    const getCharacters = async() => {
        try{
            const characterRes = await fetch ("https://rickandmortyapi.com/api/character")
            state.character = await characterRes.json()
        }
        catch(e) {
            state.error = e
        }

    }
    return { ...toRefs(state),  getCharacters }
}