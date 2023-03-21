import { User } from "../../models/User.js"
import { createKey } from "../utils/createKey.js"
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'

export const userService = (request) => {
    const { _id, userEmail } = request.params
    const { nome, email, senha } = request.body

    const createUser = async () => {
        if (!nome || !email || !senha) {
            const response = {
                statusCode: StatusCodes.EXPECTATION_FAILED,
                message: "Nome, Email e Senha são nescessarios para criar um usuario ",
            }
            throw response
        }
        const findUser = await User.findOne({ email });
        if (findUser) {
            const response = {
                statusCode: StatusCodes.CONFLICT,
                message: "Email já cadastrado !",
            }
            throw response
        }
        await User.create({
            email,
            nome,
            senha,
            key: createKey()
        });
        return { nome, email, senha }
    }

    const updateUser = async () => {
        let userForUpdate = await User.findById({ _id })
        if (!userForUpdate.email) {
            const response = {
                statusCode: StatusCodes.NOT_FOUND,
                message: `Usuario não encontrado com o id ${_id}`,
            }
            throw response
        }
        if (nome) {
            userForUpdate.nome = nome
        }
        if (email) {
            userForUpdate.email = email
        }
        if (senha) {
            userForUpdate.senha = senha
        }
        await User.findByIdAndUpdate(_id, userForUpdate)
        return { email: userForUpdate.email, nome: userForUpdate.nome }
    }

    const deleteUser = async () => {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            const response = {
                statusCode: StatusCodes.NOT_FOUND,
                message: `Id ${_id}, não é um id de usuario válido`,
            }
            throw response;
        }
        let userForDelete = await User.findById({ _id })
        if (userForDelete == null) {
            const response = {
                statusCode: StatusCodes.NOT_FOUND,
                message: `Usuario não encontrado com o id ${_id}`,
            }
            throw response
        }
        await User.deleteOne({ _id: userForDelete._id })
        return userForDelete
    }

    const getAllUser = async () => {
        const list = await User.find()
        if (list == null) {
            const response = {
                statusCode: StatusCodes.NOT_FOUND,
                message: `Nenhum usuario encontrado`,
            }
            throw response
        }
        return {
            list
        }
    }

    const getUserById = async () => {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            const response = {
                statusCode: StatusCodes.NOT_FOUND,
                message: `Id ${_id}, não é um id de usuario válido`,
            }
            throw response
        }
        const result = await User.findById({ _id })

        if (result == null) {
            const response = {
                statusCode: StatusCodes.NOT_FOUND,
                message: `Nenhum usuario encontrado com o id ${_id}`,
            }
            throw response
        }
        return result
    }

    const getUserByEmail = async () => {
        const result = await User.findOne({ email: userEmail })
        if (result == null) {
            const response = {
                statusCode: StatusCodes.NOT_FOUND,
                message: `Nenhum usuario encontrado com o Email ${userEmail}`,
            }
            throw response
        }
        return result
    }

    return {
        createUser,
        updateUser,
        deleteUser,
        getAllUser,
        getUserById,
        getUserByEmail,
    }
}
