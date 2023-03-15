import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String
  },
  nome: {
    type: String
  },
  senha: {
    type: String
  },
  key: {
    type: String
  }
})

export const User = mongoose.models.User || mongoose.model('User', userSchema)
