const returnDate = () => {
  let string: string = "Gabriel";
  let stringDate: string = "26/02/2002";
  let result: string[] = stringDate.split("/");

  return `Olá me chamo ${string}, nasci no dia ${result[0]} do mês de ${result[1]} do ano de ${result[2]}`

};

console.log(returnDate());



