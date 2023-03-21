import { itsWorks } from "./controllers/itsWorks.js"
import { getlist } from "./controllers/list/index.js"
import { getTitle } from "./controllers/title/index.js"
import { getSearch } from "./controllers/search/index.js"
import { getAllUser, createUser, updateUser, deleteUser, getUserById, getUserByEmail } from "./controllers/user/index.js"
import { createSavedTitle, updateSavedTitle, deleteSavedTitle, getSavedTitles } from "./controllers/savedTitle/index.js"
import { verifyAccessToken } from "./controllers/auth/index.js"

export const defineRoutes = (app) => {

  //ROUTES

  app.get("/", itsWorks)

  //TITLE

  app.get(
    "/titulo/:categoria/:id",
    verifyAccessToken(['USER']),
    getTitle
  )

  //SEARCH 

  app.get(
    "/busca/:search",
    verifyAccessToken(['USER']),
    getSearch
)

  //LIST

  app.get(
    "/lista/:categoria/:genero",
    verifyAccessToken(['USER']),
    getlist
  )

  //USER

  app.post(
    "/user",
    createUser
  )
  app.patch(
    "/user/:_id",
    updateUser
  )
  app.delete(
    "/user/:_id",
    deleteUser
  )
  app.get(
    "/user/:_id",
    getUserById
  )
  app.get(
    "/user/:email/:userEmail",
    getUserByEmail
  )
  app.get(
    "/user",
    getAllUser
  )
  app.get(
    "/user/list/:user_id",
    getSavedTitles
  ) 

  //SAVEDTITLES

  app.post(
    "/salvar",
    createSavedTitle
  )
  app.patch(
    "/user/:id",
    updateSavedTitle
  )
  app.delete(
    "/user/:id",
    deleteSavedTitle
  )

}