import { itsWorks } from "./controllers/itsWorks.js"
import { getlista } from "./controllers/lista/index.js"
import { getTitulo } from "./controllers/titulo/index.js"
import { getBusca } from "./controllers/busca/index.js"

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
  

}