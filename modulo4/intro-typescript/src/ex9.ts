const labApprove = (
  age: number,
  highSchool: string,
  hoursP: number,
  type: string
) => {
  if (
    age >= 18 &&
    highSchool === "sim" &&
    hoursP >= 40 &&
    type === "integral"
  ) {
    return true;
  } else if (
    age >= 18 &&
    highSchool === "sim" &&
    hoursP >= 20 &&
    type === "noturno"
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(labApprove(18, "sim", 19, "noturno"));
