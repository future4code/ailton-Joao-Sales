const anyType = (teste: any): string => {
  return typeof teste;
};

console.log(anyType(false));
