import axios from 'axios'
import { setGenero } from '../utils/setGenero.js'
import { setListaTratada } from '../utils/setListaTratada.js'

const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY

export const listaService = (request) => {

    const getLista = async () => {

        const { idioma } = request.query
        const language = idioma || "pt-BR"
        const { categoria, genero } = request.params
        const genre = setGenero(genero)
        const category = categoria === "filme" ? "movie" : "tv"

        try {
            const { data } = await axios.get(`${BASE_URL}/discover/${category}?with_genres=${genre}&language=${language}&${API_KEY}`)
            return setListaTratada(data.results, categoria);
        } catch (error) {
            throw new Error(`Error while fetching data: ${error}`)
        }
    }
    return {
        getLista
    }
}
