import mongoose from 'mongoose'
import 'dotenv/config'

const ADMIN = process.env.MONGOOSE_ADMIN
const CLUSTER = process.env.MONGOOSE_CLUSTER

export const connect = async () => {
  await mongoose.connect(`mongodb+srv://admin:${ADMIN}@${CLUSTER}.mongodb.net/Movie-Tracker?retryWrites=true&w=majority`)
}
