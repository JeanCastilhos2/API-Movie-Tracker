import { User } from "../../models/User.js"
const ADMIN_KEY = process.env.ADMIN_KEY

export const validateAccessKey = async (key, accessLevel, id) => {
  console.log(key)
 
  console.log(accessLevel)

  if (key === ADMIN_KEY) {
    return true
  }
  
  const user = await User.findOne({ key })
  console.log(user)

  if (!user) {
    return false
  }
  if (accessLevel == 'USER' && user) {
    return true
  }
  if (accessLevel === 'OWNER' && user._id == id) {
    return true
  }
  if (accessLevel === 'ADMIN' && key === ADMIN_KEY) {
    return true
  }

  return false
}

