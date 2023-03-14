import { listaService } from "../../service/lista/lista-service.js"

export const getlista = async (request, response) => {

    try {

        const result = await listaService(request).getLista()

        return response.json({
            message: "Lista de títulos encontrada",
            lista: result,
            status: 200
        })

    } catch (error) {
        return response.status(404).json({
            message: "Lista de títulos não encontrada",
            status: 404
        })
    }
}

