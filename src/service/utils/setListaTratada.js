export const setListaTratada = (resultado, categoria) => {

    const informacoesTratadas = resultado.map((resultado) => {
      const { id, name, title, overview, poster_path, backdrop_path, vote_average, release_date, first_air_date, origin_country, created_by, number_of_seasons } = resultado
      const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://via.placeholder.com/500x750.png?text=Imagem+indisponível"
      const capa = backdrop_path ? `https://image.tmdb.org/t/p/original${backdrop_path}` : "https://via.placeholder.com/500x281.png?text=Imagem+indisponível"
      const categoriaResultado = categoria === "movie" ? "Filme" : "Série"
      const lancamento = categoria === "movie" ? release_date : first_air_date
      const diretor = created_by && created_by.length > 0 ? created_by.map((criador) => criador.name).join(", ") : "Não informado"
      const pais = origin_country && origin_country.length > 0 ? origin_country.join(", ") : "Não informado"
      const temporadas = number_of_seasons ? number_of_seasons : "Não informado"

      const listaBruta = {
        id,
        nome: name || title,
        categoria: categoriaResultado,
        nota: vote_average,
        resumo: overview,
        capa,
        poster: poster,
        lancamento,
        diretor,
        pais,
        temporadas
      }

      const listaLimpa = Object.entries(listaBruta).reduce((acc, [key, value]) => {
        if (value !== null && value !== '' && value !== 'Não informado') {
          acc[key] = value;
        }
        return acc;
      }, {});

      return listaLimpa

    })
    return informacoesTratadas
  }
  