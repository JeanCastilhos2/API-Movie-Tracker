import mongoose from 'mongoose'

const savedTitleSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title_id: {
    type: String
  },
  title: {
    type: String
  },
  poster: {
    type: String
  },
  category: {
    type: String
  },
  rating: {
    type: Number
  },
  created_date: {
    type: Date,
    default: Date.now
  },
})

export const SavedTitle = mongoose.models.SavedTitle || mongoose.model('SavedTitle', savedTitleSchema)
