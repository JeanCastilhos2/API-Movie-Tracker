import { searchService } from "../../service/search/search-service.js"

export const getSearch = async (request, response) => {

    try {
        const result = await searchService(request).getSearch()
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