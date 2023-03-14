import axios from 'axios'
import { setGenero } from './utils/setGenero.js'

const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY

export const listaService = (request) => {

    const getLista = async () => {

        const {
            tipo,
            genero,
            idioma
        } = request.query

        const language = idioma || "pt-BR"
        const genre = setGenero(genero)
        const type = tipo === "filme" ? "movie" : "tv"

        try {
            const { data } = await axios.get(`${BASE_URL}/discover/${type}?with_genres=${genre}&language=${language}&${API_KEY}`)
            return data;
        } catch (error) {
            throw new Error(`Error while fetching data: ${error}`)
        }
    }
    return {
        getLista
    }
}
