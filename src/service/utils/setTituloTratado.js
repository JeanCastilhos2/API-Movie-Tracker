export const setTituloTratado = (titulo) => {

      const listaBruta = {
        id: titulo.id,
        nome: titulo.name || titulo.title,
        tipo: titulo.title ? "Filme" : "Série",
        nota: titulo.vote_average,
        resumo: titulo.overview,
        capa: `https://image.tmdb.org/t/p/original${titulo.backdrop_path}`,
        poster: `https://image.tmdb.org/t/p/original${titulo.poster_path}`,
        lancamento: titulo.release_date || first_air_date,
        diretor: titulo.created_by && titulo.created_by.length > 0 ? titulo.created_by.map((criador) => criador.name).join(", ") : "Não informado",
        pais: titulo.origin_country && titulo.origin_country.length > 0 ? titulo.origin_country.join(", ") : "Não informado",
        temporadas: titulo.number_of_seasons ? titulo.number_of_seasons : "Não informado",
        titulo_original: titulo.original_title,
        subtitulo: titulo.tagline
      }

      const listaLimpa = Object.entries(listaBruta).reduce((acc, [key, value]) => {
        if (value !== null && value !== '' && value !== 'Não informado') {
          acc[key] = value;
        }
        return acc;
      }, {});

      return listaLimpa
    }