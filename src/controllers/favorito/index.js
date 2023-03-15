import { favoritoService } from "../../service/favorito/favorito-service.js"

export const createFavorito = async (request, response) => {
    try {
        const result = await favoritoService(request).createFavorito()
        return response.json({
            message: "Favorito criado com sucesso",
            lista: result,
            status: 201
        })
    } catch (error) {
        return response.json({
            message: "Favorito não pode ser criado",
            status: 404
        })
    }
}

export const updateFavorito = async (request, response) => {
    try {
        const result = await favoritoService(request).updateFavorito()
        return response.json({
            message: "Favorito atualizado com sucesso",
            lista: result,
            status: 201
        })
    } catch (error) {
        return response.json({
            message: "Favorito não pode ser atualizado",
            status: 404
        })
    }
}

export const deleteFavorito = async (request, response) => {
    try {
        const result = await favoritoService(request).deleteFavorito()
        return response.json({
            message: "Favorito deletado com sucesso",
            lista: result,
            status: 201
        })
    } catch (error) {
        return response.json({
            message: "Favorito não pode ser deletado",
            status: 404
        })
    }
}

export const getListaDeFavoritos = async (request, response) => {
  try {
    const result = await favoritoService(request).getListaDeFavoritos()
    return response.json({
        message: "Lista de favoritos encontrada com sucesso",
        lista: result,
        status: 201
    })
} catch (error) {
    return response.json({
        message: "Lista de favoritos não foi encontrada",
        status: 404
    })
}
}


