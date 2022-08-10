const operator = (num1: number, num2: number) => {
  let sum: number = num1 + num2;
  let sub: number = num1 - num2;
  let mult: number = num1 * num2;
  if (num1 > num2) {
    console.log(`O primeiro numero é maior`);
  } else {
    console.log(`O segundo numero é maior`);
  }
  console.log(`A soma entre os dois numeros é ${sum}, A subtração entre os dois numeros é, ${sub} A multiplicação entre os dois numeros é, ${mult}
  `);
};

operator(50, 25);
