import { searchService } from "../../service/search/search-service.js"
import { StatusCodes } from 'http-status-codes'

export const getSearch = async (request, response) => {

    try {
        const result = await searchService(request).getSearch()
        return response.status(StatusCodes.OK).json({
            Message: `Lista de Titulos encontrada para ${request.params.search}`,
            Lista: result,
        })
    } catch (error) {
        return response.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            Message: error.message || "Ocorreu um erro",
        })
    }
}