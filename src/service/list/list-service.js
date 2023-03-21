import axios from 'axios'
import { setGenero } from '../utils/setGenero.js'
import { setListaTratada } from '../utils/setListaTratada.js'
import { StatusCodes } from 'http-status-codes'

const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY

export const listService = (request) => {

    const getList = async () => {

        const { idioma } = request.query
        const language = idioma || "pt-BR"
        const { categoria, genero } = request.params
        const genre = setGenero(genero)
        const category = categoria === "filme" ? "movie" : "tv"

        try {
            const { data } = await axios.get(`${BASE_URL}/discover/${category}?with_genres=${genre}&language=${language}&${API_KEY}`)
            if (!data) {
                const response = {
                    statusCode: StatusCodes.NOT_FOUND,
                    message: `Nenhum titulo encontrado com o id ${id} na categoria ${categoria}`,
                }
                throw response
            }
            return setListaTratada(data.results, categoria)
        } catch (error) {
            const response = {
                statusCode: error.response ? error.response.status : StatusCodes.INTERNAL_SERVER_ERROR,
                message: error.response ? error.response.statusText : "Ocorreu um erro na chamada da API",
            }
            throw response
        }
    }
    return {
        getList
    }
}
