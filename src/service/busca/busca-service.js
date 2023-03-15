import axios from 'axios'
import { setListaTratada } from '../utils/setListaTratada.js'

const SEARCH_URL = process.env.SEARCH_URL
const API_KEY = process.env.API_KEY

export const buscaService = (request) => {

    const getBusca = async () => {

        const { busca } = request.params
        const { idioma } = request.query
        const language = idioma || "pt-BR"

        try {
            const { data } = await axios.get(`${SEARCH_URL}?query=${busca}&${API_KEY}&language=${language}`)
            return setListaTratada(data.results);
        } catch (error) {
            throw new Error(`Error while fetching data: ${error}`)
        }
    }
    return {
        getBusca
    }
}
