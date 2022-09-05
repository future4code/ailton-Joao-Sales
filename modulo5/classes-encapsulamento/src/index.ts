console.log("servidor rodando");

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}

//exercicio 01

//a) é uma função na qual parametros são passados para inicializar os valores da class

//b) apenas uma vez
const newUser = new UserAccount("23456734554", "gabriel", 20);
console.log(newUser);

//c) utilizando os metodos de acesso publicos get para buscar a informação do atributo
// e o set para alterar a informação do atributo

//exercicio 02

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    (this.description = description), (this.value = value);
    this.date = date;
  }
}

// exercicio 03

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    console.log("Chamando o construtor da classe Bank");
    this.accounts = accounts;
  }
}

const BankAccounts = new Bank([newUser]);

console.log(BankAccounts)
