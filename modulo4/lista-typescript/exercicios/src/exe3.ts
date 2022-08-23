enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

const film = (
  nome: string,
  anoLancamento: number,
  genero: GENERO,
  ponto?: number
) => {
  const filme = {
    nome: nome,
    anoLancamento: anoLancamento,
    genero: genero,
    ponto: ponto,
  };
  return filme;
};

console.log(film("harry poter", 2010, GENERO.COMEDIA, 20));
