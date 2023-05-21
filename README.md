# Getting Started React App


![logo](./captura.png}

Utilizamos um comando para gerenciar os dois dockers chamado **ALFRED**

- No Windows, utilize o arquivo `alfred.bat`
- No Linux, utilize o arquivo `alfred.sh`

## Requisitos:

- Docker
- docker-compose
- Cypress

# Rodar em Desenvolvimento:

**Linux**
- Para iniciar o ambiente de desenvolvimento com build: `./alfred.sh --dev --build`
- Para iniciar o ambiente de desenvolvimento sem build: `./alfred.sh --dev --up`

**Windows**
- Para iniciar o ambiente de desenvolvimento com build: `alfred.bat --dev --build`
- Para iniciar o ambiente de desenvolvimento sem build: `alfred.bat --dev --up`

# Rodar em produção

**Linux**
- Para iniciar o ambiente de produção com build: `./alfred.sh --prod --build`
- Para iniciar o ambiente de produção sem build: `./alfred.sh --prod --up`

**Windows**
- Para iniciar o ambiente de produção com build: `alfred.bat --prod --build`
- Para iniciar o ambiente de produção sem build: `alfred.bat --prod --up`

## Cypress

Execute o comando `npm run open` para iniciar o Cypress.

## Observações:

O Nginx está configurado para usar a certificação na porta 443. Se desejar rodar na porta 80, basta descomentar a linha correspondente no arquivo `nginx.conf` e fazer outro build.

## Crédito:

Daivny Letícia 
- E-mail: daviny@vidal.dev.br
- Website: [https://daviny.dev](https://daviny.dev)