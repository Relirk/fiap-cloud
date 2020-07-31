# VUTTR API
<p align="left">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Relirk/bossabox-challenge-vuttr-backend">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Relirk/bossabox-challenge-vuttr-backend">
  
  <a href="https://github.com/Relirk/bossabox-challenge-vuttr-backend/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Relirk/bossabox-challenge-vuttr-backend">
  </a>

  <a href="https://github.com/Relirk/bossabox-challenge-vuttr-backend/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Relirk/bossabox-challenge-vuttr-backend">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

Este repositório contém uma simples API para o desafio de front-end do BossaBox.

Tecnologias:
* [NodeJS](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)
* [Yarn](https://yarnpkg.com/)
* [MongoDB](https://www.mongodb.com/)

## Como executar
Faça o clone/download deste repositório, execute `yarn install`. Logo em seguida você pode executar a API como desenvolvedor pelo comando `yarn dev` tendo acesso aos logs, ou mesmo como prod pelo comando `yarn start`. A API fica localizada em `http://localhost:3000`.

## Variáveis de ambiente
Crie um arquivo .env na raiz do seu projeto com as seguintes variáveis de ambiente:

```
APP_URL=http://localhost:3000
MONGO_URL= *Sua URL do MongoDB*
```

## Rotas
Esta API contém as seguintes rotas:

* `GET /tools` : lista as ferramentas cadastradas
* `GET /tools?tag=` : filtra as ferramentas utilizando uma busca por tag
* `POST /tools` : cria uma nova ferramenta
* `DELETE /tools/:id` : apaga a ferramenta com ID :id

## Exemplos

### GET /tools

Requisição: 
```javascript
GET /tools
```
Resposta:
```javascript
[
    {
        id: 1,
        title: "Notion",
        link: "https://notion.so",
        description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
        tags: [
            "organization",
            "planning",
            "collaboration",
            "writing",
            "calendar"
        ]
    },
    {
        id: 2,
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: [
            "api",
            "json",
            "schema",
            "node",
            "github",
            "rest"
        ]
    },
    {
        id: 3,
        title: "fastify",
        link: "https://www.fastify.io/",
        description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        tags: [
            "web",
            "framework",
            "node",
            "http2",
            "https",
            "localhost"
        ]
    }
]
```

### GET /tools?tag=:suaTag

Requisição: 
```javascript
GET /tools?tag=node
```
Resposta:
```javascript
[
    {
        id: 2,
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: [
            "api",
            "json",
            "schema",
            "node",
            "github",
            "rest"
        ]
    },
    {
        id: 3,
        title: "fastify",
        link: "https://www.fastify.io/",
        description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        tags: [
            "web",
            "framework",
            "node",
            "http2",
            "https",
            "localhost"
        ]
    }
]
```

### POST /tools

Requisição:
```javascript
// POST /tools
// Content-Type: application/json
{
    "title": "hotel",
    "link": "https://github.com/typicode/hotel",
    "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
    "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
}
```

Resposta:
```javascript
{
    "title": "hotel",
    "link": "https://github.com/typicode/hotel",
    "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
    "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"],
    "id":5
}
```

### DELETE /tools/:id
Requisição:
```javascript
DELETE /tools/5
```

Resposta:
```javascript
// Status: 200 OK
{}
```
