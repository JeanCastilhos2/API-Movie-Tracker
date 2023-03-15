import { buscaService } from "../../service/busca/busca-service.js"

export const getBusca = async (request, response) => {

    try {
        console.log("aqui")
        const result = await buscaService(request).getBusca()
        console.log("aquiIIII")
        return response.json({
            message: "Títulos encontrados",
            lista: result,
            status: 200
        })

    } catch (error) {
        return response.status(404).json({
            message: "Títulos não encontrados",
            status: 404
        })
    }
}