## EXERCICIO RELAÇÕES SQL

### exercicio 01

```
SELECT
    *
FROM
    Movie;
SELECT
    *
FROM
    Rating;

CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id)
        REFERENCES Movie (id)
);
-- a) é uma uma key que identifica a chave principal de outra tabela e faz uma ligação entre as duas

-- b)
    INSERT INTO Rating (id, comment, rate, movie_id)
    VALUES (
    		"001",
		"homem aranha, spidermente",
				10,
    		"004"
    );
-- c) não é possivel realizar uma avaliação em um filme cujo id não existe
    INSERT INTO Rating (id, comment, rate, movie_id)
    VALUES (
    		"002",
		"testando avaliação em id inexistente",
				5,
    		"003"
    );
-- d)
	ALTER TABLE Movie DROP COLUMN rating;
-- e) não é possivel deletar o filme, pois uma tabela está ligada a outra e a chave estrangeira não permite que a ação seja realizada,
--    ou seja, eu teria que deletar primeiro a avaliação que referencia o id no rating para posteriormente deletar o filme em si.
	DELETE FROM Movie WHERE id = "003";
    ```

### exercicio 02

```
CREATE TABLE Movie_cast (
movie_id VARCHAR(255),
actor_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id),
FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- a) em resumo, essa tabela irá referenciar atores aos filmes, através dos respectivos id's

-- b)
	SELECT * FROM Actor;
    INSERT INTO Movie_cast(movie_id, actor_id)
    VALUES(
		"004",
        "006"
    );
    	SELECT * FROM Actor;
    INSERT INTO Movie_cast(movie_id, actor_id)
    VALUES(
		"004",
        "007"
    );
    	SELECT * FROM Actor;
    INSERT INTO Movie_cast(movie_id, actor_id)
    VALUES(
		"004",
        "004"
    );
-- c) não foi possivel encontrar a referencia
	SELECT * FROM Actor;
    INSERT INTO Movie_cast(movie_id, actor_id)
    VALUES(
		"004",
        "001"
    );

-- d)não é possivel deletar o ator, pois uma tabela está ligada a outra e a chave estrangeira não permite que a ação seja realizada,
--    ou seja, eu teria que deletar primeiro a avaliação que referencia o id no rating para posteriormente deletar o ator em si.

DELETE FROM Actor WHERE name = "Antônio Fagundes";
```

### exercicio 03

```
SELECT * FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- a) o ON especifica as propriedades a serem encontradas, por um parametro especifico

-- b)
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```
