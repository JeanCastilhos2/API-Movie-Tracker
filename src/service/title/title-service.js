import axios from 'axios'
import { setTituloTratado } from '../utils/setTituloTratado.js'
import { StatusCodes } from 'http-status-codes'

const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY

export const titleService = (request) => {

    const getTitle = async () => {
        const { categoria, id } = request.params
        const { idioma } = request.query
        const language = idioma || "pt-BR"
        const category = categoria === "filme" ? "movie" : "tv"

        try {
            const { data } = await axios.get(`${BASE_URL}/${category}/${id}?language=${language}&${API_KEY}`)
            if (!data.id) {
              const response = {
                statusCode: StatusCodes.NOT_FOUND,
                message: `Nenhum titulo encontrado com o id ${id} na categoria ${categoria}`,
              }
              throw response
            }
            return setTituloTratado(data)
          } catch (error) {
            const response = {
              statusCode: error.response ? error.response.status : StatusCodes.INTERNAL_SERVER_ERROR,
              message: error.response ? error.response.statusText : "Ocorreu um erro na chamada da API",
            }
            throw response
          }      
    }
    return {
        getTitle
    }
}
