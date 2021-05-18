backend 

api mini tweet

tutorial 1 usado https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/

Banco de dados 

````
Host
ec2-184-73-198-174.compute-1.amazonaws.com
Database
d25oo9c1k7ufat
User
bvaccgrvyvflen
Port
5432
Password
1fdb1ff740ee675562fe5b0d53554ca5d337e38c999544a277db6ab26c5d096c
URI
postgres://bvaccgrvyvflen:1fdb1ff740ee675562fe5b0d53554ca5d337e38c999544a277db6ab26c5d096c@ec2-184-73-198-174.compute-1.amazonaws.com:5432/d25oo9c1k7ufat
Heroku CLI
heroku pg:psql postgresql-curved-71184 --app tweetbr
````


tabela usuario 

```
CREATE TABLE "users" (
	"id" INTEGER NOT NULL,
	"username" VARCHAR(16) NULL DEFAULT NULL,
	"pass" VARCHAR(123) NULL DEFAULT NULL,
	PRIMARY KEY ("id")
);
```

primeiro insert de test
```
INSERT INTO users (id, username, pass)
  VALUES (1, 'Jerry', 'jerry@example.com'), (2, 'George', 'george@example.com');
```