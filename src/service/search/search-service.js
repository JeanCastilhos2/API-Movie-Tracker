import axios from 'axios'
import { setListaTratada } from '../utils/setListaTratada.js'

const SEARCH_URL = process.env.SEARCH_URL
const API_KEY = process.env.API_KEY

export const searchService = (request) => {

    const getSearch = async () => {

        const { search } = request.params
        const { languageQuery } = request.query
        const language = languageQuery || "pt-BR"

        try {
            const { data } = await axios.get(`${SEARCH_URL}?query=${search}&${API_KEY}&language=${language}`)
            return setListaTratada(data.results);
        } catch (error) {
            throw new Error(`Error while fetching data: ${error}`)
        }
    }
    return {
        getSearch
    }
}
