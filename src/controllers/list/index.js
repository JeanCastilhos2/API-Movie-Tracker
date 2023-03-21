import { listService } from "../../service/list/list-service.js"
import { StatusCodes } from 'http-status-codes'

export const getlist = async (request, response) => {
    try {
        const result = await listService(request).getList()
        return response.status(StatusCodes.OK).json({
            Message: `Lista de Titulos da encontrada !`,
            Titulo: result,
          })
    } catch (error) {
        return response.status(error.statusCode).json({
            Message: `Nenhum titulo encontrado com o genero ${request.params.genero} na categoria ${request.params.categoria}`,
          })
    }
}

