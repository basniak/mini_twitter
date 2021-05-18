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
