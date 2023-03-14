export const setGenero = (genero) => {
    const generos = {
      "acao": 28,
      "aventura": 12,
      "animacao": 16,
      "comedia": 35,
      "crime": 80,
      "documentario": 99,
      "drama": 18,
      "familia": 10751,
      "fantasia": 14,
      "historia": 36,
      "terror": 27,
      "musica": 10402,
      "misterio": 9648,
      "romance": 10749,
      "ficcao cientifica": 878,
      "cinema tv": 10770,
      "suspense": 53,
      "guerra": 10752,
      "faroeste": 37
    }
  
    const generoFormatado = genero.toLowerCase().replace(/[^a-zA-Z]/g, "")
  
    return generos[generoFormatado] || ""
  }
  