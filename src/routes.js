
const itsWorks = (request, response) => {
    return response.json({ message: "it's works!" })
  }
export const defineRoutes = (app) => {

    //ROUTES

    app.get("/", itsWorks)

}