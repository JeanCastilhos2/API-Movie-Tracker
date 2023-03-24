export const itsWorks = (request, response) => {
    return response.json({
      "endpoints": [
      {
      "name": "Obter título",
      "description": "Retorna as informações de um título específico.",
      "method": "GET",
      "url": "/titulo/:categoria/:id",
      "queryParams": [
      {
      "name": "key",
      "description": "Chave de autenticação do usuário.",
      "required": true
      }
      ],
      "params": [
      {
      "name": "categoria",
      "description": "String que indica a categoria do título (filme ou série).",
      "required": true
      },
      {
      "name": "id",
      "description": "String que indica o ID do título a ser obtido.",
      "required": true
      }
      ],
      "responses": [
      {
      "status": 200,
      "description": "Retorna um objeto JSON com as informações do título."
      },
      {
      "status": 401,
      "description": "Erro de autenticação do usuário."
      },
      {
      "status": 404,
      "description": "Erro indicando que o título não foi encontrado."
      }
      ]
      },
      {
      "name": "Pesquisar títulos",
      "description": "Retorna uma lista de títulos que correspondem a uma determinada pesquisa.",
      "method": "GET",
      "url": "/busca/:search",
      "queryParams": [
      {
      "name": "key",
      "description": "Chave de autenticação do usuário.",
      "required": true
      }
      ],
      "params": [
      {
      "name": "search",
      "description": "String que indica a palavra ou frase a ser pesquisada.",
      "required": true
      }
      ],
      "responses": [
      {
      "status": 200,
      "description": "Retorna uma lista de objetos JSON com as informações dos títulos correspondentes à pesquisa."
      },
      {
      "status": 401,
      "description": "Erro de autenticação do usuário."
      }
      ]
      },
      {
      "name": "Listar títulos por gênero",
      "description": "Retorna uma lista de títulos de uma categoria e gênero específicos.",
      "method": "GET",
      "url": "/lista/:categoria/:genero",
      "queryParams": [
      {
      "name": "key",
      "description": "Chave de autenticação do usuário.",
      "required": true
      }
      ],
      "params": [
      {
      "name": "categoria",
      "description": "String que indica a categoria do título (filme ou série).",
      "required": true
      },
      {
      "name": "genero",
      "description": "String que indica o gênero do título a ser obtido.",
      "required": true
      }
      ],
      "responses": [
      {
      "status": 200,
      "description": "Retorna uma lista de objetos JSON com as informações dos títulos da categoria e gênero especificados."
      },
      {
      "status": 401,
      "description": "Erro de autenticação do usuário."
      }
      ]
      }
      ]
      })
  }