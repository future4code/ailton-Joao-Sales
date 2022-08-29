## Exercicio aprofundamento sql
#### SET SQL_SAFE_UPDATES = 0;

### exercicio 01
```
-- a) apaga a coluna
-- b) troca as propriedades de gender para sex
-- c) vai alterar a quantidade de caracteres que o varchar do gender aceita pra 255
-- d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### exericio 02
```
-- a)
UPDATE Actor
SET name = "Fernanda Franco",
 birth_date = "1950-12-12"
WHERE id = "003";
-- b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
-- c)
UPDATE Actor
SET name = "serjão berranteiro",
	salary = 50000,
    birth_date = "1990-05-19",
    gender = "male"
WHERE id = "005";
-- d)
UPDATE Actor
SET name = "teste",
	salary = 500000,
    birth_date = "2000-05-29",
    gender = "male"
WHERE id = "1000";
-- fiz um teste buscando pelo id 1000 pra fazer uma alteração e a alteração foi feita,
-- porem, nada mudou, pois não existia nenhum dado com o id 1000
```

### exercicio 03
```
-- a)
DELETE FROM Actor WHERE name = "Fernanda Franco";
-- b)
DELETE FROM Actor
 WHERE gender = "male" AND salary > 1000000;
```

### exercicio 04

```
-- a)
SELECT MAX(salary) FROM Actor;
-- b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";
-- c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";
-- d)
SELECT SUM(salary) FROM Actor;
```

### exercicio 05
```
-- a)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- esta query retorna a quantidade de atores respectivos relacionados a cada genero
-- b)
SELECT id, name FROM Actor
ORDER BY name DESC;
-- c)
SELECT id, name FROM Actor
ORDER BY name DESC;
-- d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
-- e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### exercicio 06
```
-- a)
ALTER TABLE Movie ADD playing_limit_date DATE;
SELECT * FROM Movie;
-- b)
ALTER TABLE Movie CHANGE rating rating FLOAT;
-- c)
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";
--                                             --
UPDATE Movie
SET
	playing_limit_date = "2022-12-31"
WHERE id = "004";
-- d)
DELETE FROM Movie WHERE id = "001";
```
