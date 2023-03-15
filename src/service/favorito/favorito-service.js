import { Favorito } from "../../models/Favorito.js"

export const FavoritoService = (request) => {

    const { _id, usuario_id, titulo_id, titulo, poster, categoria, nota, } = request.body

    const createFavorito = async () => {
        try {
            const createFavorito = await Favorito.create({
                usuario_id,
                titulo_id,
                titulo,
                poster,
                categoria,
                nota,
            })
            return createFavorito;
        } catch (error) {
            return response.json({
                message: `Titulo não pode ser salvo`,
                status: 404
            })
        }
    }

    const updateFavorito = async () => {
        try {
            let lisfavoritoForUpdate = await Favorito.findById({ _id })
            if (!lisfavoritoForUpdate) {
                return response.json({
                    message: `Favorito não pode ser encontrado`,
                    status: 404
                })
            }
            lisfavoritoForUpdate.nota = nota
            await lisfavoritoForUpdate.save()
            return lisfavoritoForUpdate
        } catch (error) {
            return response.json({
                message: `Favorito não pode ser atualizado`,
                status: 404
            })
        }
    }

    const deleteFavorito = async () => {
        try {
            const { _id } = request.params
            let favoritoForDelete = await Favorito.findByIdAndDelete({ _id })
            if (!favoritoForDelete) {
                return response.json({
                    message: `Favorito não foi encontrado`,
                    status: 404
                })
            }
            return favoritoForDelete
        } catch (error) {
            return response.json({
                message: `Favorito não pode ser encontrado`,
                status: 404
            })
        }
    }

    const getListaDeFavoritos = async () => {
        try {
            const favoritos = await Favorito.find({ usuario_id })

            if (!favoritos) {
                return response.json({
                    message: `Lista do Usuario não encontrada`,
                    status: 404
                })
            }
            return { MinhaLista: favoritos }
        } catch (error) {
            return response.json({
                message: `Lista do usuario não encontrada`,
                status: 404
            })
        }
    }

    return {
      createFavorito,
      updateFavorito,
      deleteFavorito,
      getListaDeFavoritos  
    }
}