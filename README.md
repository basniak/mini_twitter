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

```
Host
ec2-184-73-198-174.compute-1.amazonaws.com
heroku pg:psql postgresql-curved-71184 --app tweetbr
```

tabela usuario

```
CREATE TABLE "users" (
	"id" INTEGER NOT NULL,
	"username" VARCHAR(16) NOT NULL,
	"pass" VARCHAR(123) NOT NULL,
	"createdat" TIMESTAMP NOT NULL,
	PRIMARY KEY ("id")
);
```

primeiro insert de test

```
INSERT INTO users (id, username, pass)
  VALUES (1, 'Jerry', 'jerry@example.com'), (2, 'George', 'george@example.com');
```

### tabela tweets

```
CREATE TABLE "posts" (
		"id" INTEGER NOT NULL DEFAULT 'nextval(''test_id_seq''::regclass)',
	"user_id" INTEGER NOT NULL,
	"tweet" VARCHAR(140) NOT NULL,
	"createdat" TIMESTAMP NOT NULL,
	PRIMARY KEY ("id"),
	CONSTRAINT "FK_posts_users" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);
```
