//exercicio 01

//a)

// let minhaString:string = 'teste'
// minhaString = 10

//o numero não pode ser recebido por uma variavel tipada como
//string

//b)

// let meuNumero:number|string = 20
// meuNumero = 'vinte'

//é necessario que façamos um union type atribuindo o tipo da
//variavel como numero e string

//c)

// type person = {
//   name: string;
//   age: number;
//   favColor: string;
// };

// enum FavColor {
//   BLACK = "Black",
//   ORANGE = "Orange",
//   BLUE = "Blue",
//   WINE = "Wine",
//   GRAY = "Gray",
//   GREEN = "Green",
// }

// const pessoa1: person = {
//   name: "gabe",
//   age: 20,
//   favColor: FavColor.BLACK,
// };
// const pessoa2: person = {
//   name: "iri",
//   age: 25,
//   favColor: FavColor.ORANGE,
// };
// const pessoa3: person = {
//   name: "vendas",
//   age: 30,
//   favColor: FavColor.WINE,
// };

// console.log(pessoa1)

//exercicio 02

//a/b/c
// type tiposNumeros = {
//   maior: number;
//   menor: number;
//   media: number;
// };

// function obterEstatisticas(numeros: number[]): tiposNumeros {
//   const numerosOrdenados: number[] = numeros.sort(
//     (a: number, b: number) => a - b
//   );

//   let soma: number = 0;

//   for (let num of numeros) {
//     soma += num;
//   }

//   const estatisticas: tiposNumeros = {
//     maior: numerosOrdenados[numeros.length - 1],
//     menor: numerosOrdenados[0],
//     media: soma / numeros.length,
//   };

//   return estatisticas;
// }

//exercicio 03

//a)
type post = {
  autor: string;
  texto: string;
};

const posts: post[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver",
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!",
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!",
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!",
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!",
  },
];
// console.table(posts);

//b)

function buscarPostsPorAutor(posts: post[], autorInformado: string) {
  return posts.filter((post) => {
    return post.autor === autorInformado;
  });
}

//  console.log(buscarPostsPorAutor(posts, 'Dobby'));
