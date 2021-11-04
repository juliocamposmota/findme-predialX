<h1 align="center">PredialX</h1>

> Status do Projeto: :warning: (em desenvolvimento)

### Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

:small_blue_diamond: [Linguagens, dependencias e libs utilizadas](#linguagens-,-dependencias-e-libs-utilizadas)

:small_blue_diamond: [Tarefas em aberto](#tarefas-em-aberto)

## Descrição do projeto 

<p align="justify">
  A plataforma PredialX foi desenvolvida para realizar a gestão da manutenção do seu empreendimento. <br>
  Esta aplicação se propõe a trazer eficiência e segurança ao dia a dia das equipes. Nela é possivel cadastrar clientes, colaboradores e ordens de serviço. Onde cada colaborador será responsável por atender as ordens que lhe forem designadas.
  
  O sistema da PredialX foi desenvolvido para ter larga escalabilidade. Roda na web e conta com:
  - Uma aplicação front-end escrita em React JS para gerir clientes
  - Uma aplicação back-end escrita com Node JS conectada a bancos de dados (MongoDB) para garantir a confiabilidade das informações.
  - Uma aplicação mobile para colaboradores atenderem ocorrências in-loco (future feature).
</p>

## Funcionalidades

:heavy_check_mark: Persistência de dados com modelos de: Clientes, Colaboradores, Ordens de Serviço.

:heavy_check_mark: Listagem de Clientes.

:heavy_check_mark: Listagem de Ordens abertas.

:heavy_check_mark: Listagem de colaboradores por cliente.

## Como rodar a aplicação :arrow_forward:

1. Clonar o repositório na sua máquina:
```
git clone git@github.com:juliocamposmota/findme-predialX.git
```
2. Acessar diretório do repositório e instalar dependências
```
cd findem-predialX
npm install
```
3. Iniciar uma instância do mongodb (inserir dados se desejar)
```
systemctl start mongod
./backend/src/database/database.mongodb
```
4. Rodar script back-end
```
cd ./backend
npm start
```
5. Rodar script
```
cd ./frontend
npm start
```

## Linguagens, dependencias e libs utilizadas :books:

- [React JS]
- [Node JS]
- [MongoDB]
- [HTML]
- [CSS]
- [JavaScript]

## Tarefas em aberto

Próximos passos:

:memo: Implementar as demais rotas no frontend e concluir o crud.

:memo: Melhorar nos aspectos de UI / UX.

:memo: Implementar controle geolocalização.

:memo: Implementar mais funcionalidades de filtro.

:memo: Implementar gráfios para gestão.

## Desenvolvedores/Contribuintes :octocat:

Time responsável pelo desenvolvimento deste projeto

[<img src="https://avatars3.githubusercontent.com/u/68956245?s=460&u=b7f1c48f3332d7dc29f2ec71c70116c6efff47d0&v=4" width=115><br><sub>Júlio Mota</sub>](https://github.com/juliocamposmota)

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2021 - App PredialX
