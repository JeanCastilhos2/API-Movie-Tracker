import mongoose from 'mongoose'

const listSchema = new mongoose.Schema({
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  titulo_id: {
    type: String
  },
  titulo: {
    type: String
  },
  poster: {
    type: String
  },
  categoria: {
    type: String
  },
  nota: {
    type: Number
  },
  created_date: {
    type: Date,
    default: Date.now
  },
})

export const List = mongoose.models.List || mongoose.model('List', listSchema)

