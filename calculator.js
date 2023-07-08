let a = 1,
  b = 2;
const Calculator = [
  { operation: a + b, description: "Penjumlahan" },
  { operation: a - b, description: "Pengurangan" },
  { operation: a * b, description: "Perkalian" },
  { operation: a / b, description: "Pembagian" },
];

let maxOperation = Calculator[0].operation,
    maxDescription = Calculator[0].description;
for(let i=1;i<Calculator.length;i++){
  if(Calculator[i].operation>maxOperation){
    maxOperation=Calculator[i].operation;
  maxDescription= Calculator[i].description;
  }
}

console.log(`${a}+${b}=${Calculator[0].operation}`);
console.log(`${a}-${b}=${Calculator[1].operation}`);
console.log(`${a}*${b}=${Calculator[2].operation}`);
console.log(`${a}/${b}=${Calculator[3].operation}`);
console.log(`Hasil Operasi Terbesar = ${maxOperation} yang merupakan ${maxDescription} dari ${a} dan ${b}`);