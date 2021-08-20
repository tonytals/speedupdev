# Nome do Ativo
* ASPARLEGIS API  PHP COM LARAVEL
* ASPARLEGIS FRONTEND EM REACTJS 

# Tecnologia
* PHP 7.2
* Composer
* Apache 2
* Docker
* React


# clonando Repositório de codigo-fonte
git clone https://gitlabbuilder.mec.gov.br/asparlegis/asparlegis.git 

# Instalação /Configuracão da aplicação

Para ambientes de desenvolvimento,  deverá obrigatoriamente utilizar o docker para disponibilizar a aplicação em desenvolvimento, para isso é necessário que se tenha o docker e o docker compose instalado e executar o seguinte comando no root da aplicação.

```
# Sobindo o Frontend e Backend
--1- docker-compose build
--2- docker-compose up -d

#listando os container após o build

--docker ps

# instalando as dependências do frontend

--docker-compose exec asparlegis-frontend sh -c "npm install"

# executando aplicação do frontend

--docker-compose exec asparlegis-frontend sh -c "npm start"

#Configurando o Backend da aplicação

--docker-compose exec asparlegis-api sh -c "composer install"

--docker-compose exec asparlegis-api sh -c "cp .env.example .env"

--docker-compose exec asparlegis-api sh -c "php artisan key:generate"

```

# Visualizando aplicação localhost
* API 
http://localhost:7083/

* Frontend
http://localhost:7082/

# Observações

Favor não alterar os arquivos de Configuração  dockerfile e docker-compose e chart, se necessário comunicar equipe da arquitetura da CGS.