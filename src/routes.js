import { itsWorks } from "./controllers/itsWorks.js"
import { getlista } from "./controllers/lista/index.js"
import { getTitulo } from "./controllers/titulo/index.js"
import { getBusca } from "./controllers/busca/index.js"
import { getAllUser, createUser, updateUser, deleteUser, getUserById } from "./controllers/user/index.js"

export const defineRoutes = (app) => {

  //ROUTES

  app.get("/", itsWorks)

  //TITULO 

  app.get(
    "/titulo/:categoria/:id",
    getTitulo
  )

  //BUSCA 

  app.get(
    "/buscar/:busca",
    getBusca
  )

  //LISTA

  app.get(
    "/lista/:categoria/:genero",
    getlista
  )

  //USER

  app.get(
    "/user",
    getAllUser
  )
  app.get(
    "/user/:id",
    getUserById
  )
  app.post(
    "/user",
    createUser
  )
  app.patch(
    "/user/:id",
    updateUser
  )
  app.delete(
    "/user/:id",
    deleteUser
  )

  /* app.get(
    "/user/list/:user_id",
    getListByUser
  ) */

}