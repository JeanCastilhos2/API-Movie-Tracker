import { titleService } from "../../service/title/title-service.js"
import { StatusCodes } from 'http-status-codes'

export const getTitle = async (request, response) => {
    try {
      const result = await titleService(request).getTitle()
      return response.status(StatusCodes.OK).json({
        Message: `Titulo encontrado !`,
        Titulo: result,
      })
    } catch (error) {
        return response.status(error.statusCode).json({
          Message: `Nenhum titulo encontrado com o id ${request.params.id} na categoria ${request.params.categoria}`,
        })
      }
  }





