import { User } from "../../models/User.js"

export const userService = (request) => {

    const { _id, nome, email, senha } = body

    const createUser = async () => {
        const findUser = await User.findOne({ email })
        if (findUser) {
            return response.json({
                message: "Email já cadastrado",
                status: 409
            })
        }
        const createUser = User.create({
            email,
            nome,
            senha
        })
        return { createUser }
    }

    const updateUser = async () => {
        let userForUpdate = await User.findById({ _id })
        if (!userForUpdate.email) {
            return response.json({
                message: `Usuario não encontrado com o id: ${_id}`,
                status: 404
            })
        }
        if (email) {
            userForUpdate.email = email
        }
        if (nome) {
            userForUpdate.nome = nome
        }
        if (senha) {
            userForUpdate.senha = senha
        }
        const updateUser = User.findByIdAndUpdate(_id, userForUpdate)
        return updateUser
    }

    const deleteUser = async () => {
        const { _id } =
            UserRequest(request).getUserForDelete()
        let userForDelete = await User.findById({ _id })
        if (!userForDelete) {
            return response.json({
                message: `Usuario não encontrado com o id: ${_id}`,
                status: 404
            })
        }
        userForDelete.remove()
        return { name: userForDelete.nome, email: userForDelete.email }
    }

    const getAllUser = async () => {
        const lista = await User.find()
        return {
            users: lista
        }
    }

    const getUserById = async () => {
        const result = await User.findOne({ _id })
        return result
    }

    const getUserByEmail = async () => {
        const result = await User.findOne({ email })
        return result
    }

    return {
        createUser,
        updateUser,
        deleteUser,
        getAllUser,
        getUserById,
        getUserByEmail
    }
}
