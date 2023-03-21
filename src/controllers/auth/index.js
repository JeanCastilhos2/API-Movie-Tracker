import { validateAccessKey } from "../../service/auth/auth-service.js";
import { StatusCodes } from 'http-status-codes';

export const verifyAccessToken = (accessLevel) => async (request, response, next) => {
  const { key } = request.query
  const { _id } = request.params || ""
  
  const isValidAccess = await validateAccessKey(key, accessLevel, _id)
  if (isValidAccess) {
    return next()
  }

  return response.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).json({
    Message: `Invalid access key or access level`,
  })
}