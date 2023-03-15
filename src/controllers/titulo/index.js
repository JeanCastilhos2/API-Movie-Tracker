import { tituloService } from "../../service/titulo/titulo-service.js"

export const getTitulo = async (request, response) => {

    try {

        const result = await tituloService(request).getTitulo()

        return response.json({
            message: "Títulos encontrado",
            lista: result,
            status: 200
        })

    } catch (error) {
        return response.status(404).json({
            message: "Título não encontrado",
            status: 404
        })
    }
}





