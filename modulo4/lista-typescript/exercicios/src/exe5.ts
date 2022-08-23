type user = {
  name: string;
  email: string;
  role: string;
};

const users: user[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

const returnAdmin = (usersAdmin: user[]) => {
  const admin = usersAdmin
    .filter((item) => {
      if (item.role === "admin") {
        return item;
      }
    })
    .map((adm) => {
      return adm.email;
    });
  return admin;
};

console.log(returnAdmin(users));
