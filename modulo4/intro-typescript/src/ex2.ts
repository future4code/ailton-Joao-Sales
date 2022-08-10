function imprimeTresCoresFavoritas(): void {
  const cor1: any = process.argv[2];
  const cor2: any = process.argv[3];
  const cor3: any = process.argv[4];
  console.log([cor1, cor2, cor3]);
}

imprimeTresCoresFavoritas();
