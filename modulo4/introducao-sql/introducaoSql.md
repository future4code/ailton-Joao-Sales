USE `ailton-joao-sales`;

-- exercicio 01

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- a) varchar tipa o valor/variavel como string
--    DATE representa uma data.
 -- b) SHOW DATABASES retorna os bancos de dados criados 
 -- SHOW TABLES retorna os nomes das tabelas criadas
-- c) o comando DESCRIBE retorna todas as propriedades da tabela citada

-- exercicio 02
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- a) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000 ,
  "1963-08-23", 
  "female"
);

-- b) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "joão Pires",
  1200000 ,
  "2000-08-13", 
  "female"
);
-- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
-- retornou esse erro pela tentativa de duplicar o id que deve ser unico, ou seja, não é possivel ser duplicado

-- c) ele não recebeu todas as propriedades na linha de inserção faltaram a data de nascimento e o genero
-- INSERT INTO Actor (id, name, salary)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- d) é obrigatorio inserir o nome tanto no valor quanto na propriedade
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- caso solucionado
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
-- e) a data foi passada sem ser entre string
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
-- f) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Xitão Fagundes",
  400000,
  "1949-01-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Juliana irineus",
  719333.33,
  "1979-03-20", 
  "female"
);
 -- exercicio 03 
-- a)
SELECT id, name from Actor WHERE gender = "female";
-- b)
SELECT id, name, salary from Actor WHERE name = "Tony Ramos";
-- c) retorna null pois não esiste nenhum item
SELECT * from Actor WHERE gender = "invalid"; 
-- d) 
SELECT id, name, salary from Actor WHERE salary < 500000;
-- e) a propriedade nome escrita da maneira incorreta, é suposto q seja name
SELECT id, name from Actor WHERE id = "002";

-- exercicio 04
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
-- a) acima temos o seletor que busca todos os valores do atores 
-- e uma condicional que retornará apenas os que iniciam com as letras A e J, que tenham o salary de mais de 300000
-- b) 
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000; 
-- c) 
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");
-- d)
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 300000 AND 900000;

-- exercicio 05 
CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
-- a)
-- filme 01
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
    );
-- filme 02
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
    );
-- filme 03
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
    );
-- filme 04
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "HOMEM-ARANHA: SEM VOLTA PARA CASA",
    "Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as consequências da sua identidade como o herói mais querido do mundo após ter sido revelada pela reportagem do Clarim Diário, com uma gravação feita por Mysterio (Jake Gyllenhaal) no filme anterior. Incapaz de separar sua vida normal das aventuras de ser um super-herói, além de ter sua reputação arruinada por acharem que foi ele quem matou Mysterio e pondo em risco seus entes mais queridos, Parker pede ao Doutor Estranho (Benedict Cumberbatch) para que todos esqueçam sua verdadeira identidade. Entretanto, o feitiço não sai como planejado e a situação torna-se ainda mais perigosa quando vilões de outras versões de Homem-Aranha de outro universos acabam indo para seu mundo. Agora, Peter não só deter vilões de suas outras versões e fazer com que eles voltem para seu universo original, mas também aprender que, com grandes poderes vem grandes responsabilidades como herói.",
    "2021-12-16",
    9
    );
    
-- exercicio 06 
-- a)
SELECT id, title, rating from Movie WHERE id = "004";
-- b)
SELECT * from Movie WHERE title = "HOMEM-ARANHA: SEM VOLTA PARA CASA";
-- c)
SELECT * from Movie WHERE rating >= 7;

-- exercicio 07
-- a) 
SELECT * FROM Movie
WHERE title LIKE "%VOLTA%";
-- b)
SELECT * FROM Movie
WHERE title LIKE "%CASA%" OR
      synopsis LIKE "%casa%";
-- c) 
SELECT * FROM Movie
WHERE release_date < "2012-12-01";
 -- d) 
SELECT * FROM Movie
WHERE release_date <= "2021-12-16" AND 
      (title LIKE "%CASA%" OR synopsis LIKE "%Aranha%") AND rating > 7;
      
      

 







    























 
 