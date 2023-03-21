import { userService } from "../../service/user/user-service.js"
import { StatusCodes } from 'http-status-codes'

export const createUser = async (request, response) => {
    try {
        const result = await userService(request).createUser()
        return response.status(StatusCodes.CREATED).json({
            Message: "Usuario criado com sucesso",
            User: result,
        })
    } catch (error) {
        return response.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            Message: error.message || "Ocorreu um erro ao criar o usuário",
        })
    }
}

export const updateUser = async (request, response) => {
    try {
        const result = await userService(request).updateUser()
        return response.status(StatusCodes.OK).json({
            Message: "Usuario atualizado com sucesso",
            User: result,
        })
    } catch (error) {
        return response.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            Message: error.message || "Ocorreu um erro ao atualizar o usuário",
        })
    }
}

export const deleteUser = async (request, response) => {
    try {
        const result = await userService(request).deleteUser()
        return response.status(StatusCodes.OK).json({
            Message: "Usuario deletado com sucesso",
            User: result,
        })
    } catch (error) {
        return response.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            Message: error.message || "Ocorreu um erro ao deletar o usuário",
        })
    }
}

export const getAllUser = async (request, response) => {
    try {
        const result = await userService(request).getAllUser()
        return response.status(StatusCodes.OK).json({
            Message: "Lista de usuarios encontrada com sucesso",
            Users: result,
        })
    }catch (error) {
        return response.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            Message: error.message || "Erro ao buscar a lista de usuarios",
        })
    }
}

export const getUserById = async (request, response) => {
    try {
        const result = await userService(request).getUserById()
        return response.status(StatusCodes.OK).json({
            Message: "Usuario encontrado com sucesso",
            User: result,
        })
    } catch (error) {
        return response.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            Message: error.message || "Ocorreu um erro ao buscar o usuário",
        })
    }
}

export const getUserByEmail = async (request, response) => {
    try {
        const result = await userService(request).getUserByEmail()
        return response.status(StatusCodes.OK).json({
            Message: "Usuario encontrado com sucesso",
            User: result,
        })
    } catch (error) {
        return response.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            Message: error.message || "Ocorreu um erro ao buscar o usuário",
        })
    }
}
