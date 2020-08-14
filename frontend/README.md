# FIAP-CLOUD (Frontend)

<p align="left">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Relirk/fiap-cloud">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Relirk/fiap-cloud">
  
  <a href="https://github.com/Relirk/fiap-cloud/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Relirk/fiap-cloud">
  </a>

  <a href="https://github.com/Relirk/fiap-cloud/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Relirk/fiap-cloud">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

Este repositório contém uma simples interface front-end para a conclusão do trabalho da disciplina Cloud Foundation do MBA da FIAP.

- Em conjunto com a api a interface é completamente funcional.

![Screenshot 1](fiap.png)

Tecnologias utilizadas:

- [ReactJS](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [Yarn](https://yarnpkg.com/)

## Como executar

- Execute `yarn install` e `yarn start`. A interface fica localizada em `http://localhost:3001`.

## Recursos

Esta interface tem implementado as seguintes rotas da api:

- `GET /tools` : lista as ferramentas cadastradas
- `POST /tools` : cria uma nova ferramenta
- `DELETE /tools/:id` : apaga a ferramenta com ID :id
- Em `GET /tools` fazer uma busca global utilizando a query string `?q=:busca`;
- Em `GET /tools` fazer uma busca por tags individuais utilizando a query string `?tags_like=:busca`.
