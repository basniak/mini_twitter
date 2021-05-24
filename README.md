Vinicius A. Basniak. RA: 1771345
Ykaro J. S. Andrade. RA: 1750607

Trabalho desenvolvido para PROJETO-2 da disciplina de Web 2, do curso de Engenharia de Software,
da UTFPR.
Para ultilização do firebase usamos o seguinte tutorial abaixo.
https://www.positronx.io/full-angular-7-firebase-authentication-system/
A ferramenta do firebase foi utilizada para hospedagem do front-end e
autenticação dos usuários.
Foi utilizado o seguinte tutorial abaixo para fazer a hospedagem do front-end.
https://www.positronx.io/deploy-angular-app-to-production-with-firebase-hosting/
Uma instância do banco de dados do postgresql no heroku.
O Heroku foi utilizado para hospedagem da API, com integração contínua com o repositório do projeto.

## backend

api mini tweet

#### tutorial 1 usado https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/

Banco de dados

Postgres versão 10.17

Script de criação das tabelas

```
CREATE TABLE users (
	id SERIAL ,
	username VARCHAR(50) NOT NULL,
	email VARCHAR(58) NOT NULL,
	createdat TIMESTAMP  DEFAULT  CURRENT_TIMESTAMP,
	uid VARCHAR(50) NOT NULL,
	PRIMARY KEY (id),
	 UNIQUE (username),
	  UNIQUE (email),
	   UNIQUE (uid)
);

CREATE TABLE posts (
	id SERIAL,
	user_id INTEGER NOT NULL,
	tweet VARCHAR(140) NOT NULL,
	createdat  TIMESTAMP  DEFAULT  CURRENT_TIMESTAMP,
	PRIMARY KEY (id),
	CONSTRAINT "FK_posts_users" FOREIGN KEY (user_id) REFERENCES public.users (id) ON UPDATE NO ACTION ON DELETE NO ACTION
)
;

```
