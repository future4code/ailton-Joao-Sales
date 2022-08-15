const convertRna = (dna: string): string => {
  let rna: string = "";
  for (const item of dna) {
    if (item === "A") {
      rna += "U";
    }
    if (item === "T") {
      rna += "A";
    }
    if (item === "C") {
      rna += "G";
    }
    if (item === "G") {
      rna += "C";
    }
  }
  return rna;
};
console.log(convertRna("ATTGCTGCGCATTAACGACGCGTA"));
