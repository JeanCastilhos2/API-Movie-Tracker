import axios from 'axios'
import { setTituloTratado } from '../utils/setTituloTratado.js'

const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY

export const tituloService = (request) => {

    const getTitulo = async () => {

        const { categoria , id } = request.params
        const { idioma } = request.query
        const language = idioma || "pt-BR"
        const category = categoria === "filme" ? "movie" : "tv"

        try {
            const { data } = await axios.get(`${BASE_URL}/${category}/${id}?language=${language}&${API_KEY}`)
            return setTituloTratado(data);
        } catch (error) {
            throw new Error(`Error while fetching data: ${error}`)
        }
    }
    return {
        getTitulo
    }
}
