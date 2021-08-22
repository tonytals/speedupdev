# Projeto
* SPEEDUPDEV

# Tecnologia
* PHP 7.2
* Composer
* Apache 2
* Docker
* React

# Instalação /Configuracão da aplicação

Requer: Docker e Docker Compose

```
# Montando os containers
$ docker-compose build
$ docker-compose up -d

# instalando as dependências do frontend
$ docker-compose exec speedupdev-frontend sh -c "npm install"

# executando aplicação do frontend
$ docker-compose exec speedupdev-frontend sh -c "npm start"

#Configurando o Backend da aplicação
$ docker-compose exec speedupdev-api sh -c "composer install"
$ docker-compose exec speedupdev-api sh -c "cp .env.example .env"
$ docker-compose exec speedupdev-api sh -c "php artisan key:generate"

```

# Visualizando aplicação localhost
* API 
http://localhost:7083/

* Frontend
http://localhost:7082/
