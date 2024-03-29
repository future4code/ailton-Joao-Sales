export enum userType {
  Admin = "ADMIN",
  Normal = "NORMAL",
}

export type User = {
  id: number;
  name: string;
  email: string;
  type: userType;
  age: number;
};

export let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: userType.Admin,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: userType.Normal,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: userType.Normal,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: userType.Normal,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: userType.Admin,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: userType.Admin,
    age: 60,
  },
];
