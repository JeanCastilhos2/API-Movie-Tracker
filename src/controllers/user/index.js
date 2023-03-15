import { userService } from "../../service/user/user-service.js"

export const createUser = async (request, response) => {
    try {
        const result = await userService(request).createUser()
        return response.json({
            message: "Usuario criado com sucesso",
            lista: result,
            status: 201
        })
    } catch (error) {
        return response.json({
            message: "Usuario não pode ser criado",
            status: 404
        })
    }
}

export const updateUser = async (request, response) => {
    try {
        const result = await userService(request).updateUser()
        return response.json({
            message: "Usuario atualizado com sucesso",
            lista: result,
            status: 201
        })
    } catch (error) {
        return response.json({
            message: "Usuario não pode ser atualizado",
            status: 404
        })
    }
}

export const deleteUser = async (request, response) => {
    try {
        const result = await userService(request).deleteUser()
        return response.json({
            message: "Usuario deletado com sucesso",
            lista: result,
            status: 201
        })
    } catch (error) {
        return response.json({
            message: "Usuario não pode ser deletado",
            status: 404
        })
    }
}

export const getAllUser = async (request, response) => {
    try {
        const result = await userService(request).getAllUser()
        return response.json({
            message: "Lista de usuarios encontrada com sucesso",
            lista: result,
            status: 201
        })
    } catch (error) {
        return response.json({
            message: "Lista de usuarios não pode ser criada",
            status: 404
        })
    }
}

export const getUserById = async (request, response) => {
    try {
        const result = await userService(request).getUserById()
        return response.json({
            message: "Usuario encontrado com sucesso",
            lista: result,
            status: 201
        })
    } catch (error) {
        return response.json({
            message: "Usuario não pode ser encontrado",
            status: 404
        })
    }
}
