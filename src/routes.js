import { itsWorks } from "./controllers/itsWorks.js"
import { getlista } from "./controllers/lista/index.js"

export const defineRoutes = (app) => {

  //ROUTES

  app.get("/", itsWorks)
  
  //LISTA
  
  app.get(
    "/lista",
    getlista
  )

}