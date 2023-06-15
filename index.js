const penjumlahan = (a, b) => a + b;
const pengurangan = (a, b) => a - b;
const perkalian = (a, b) => a * b;
const pembagian = (a, b) => a / b;

var a = 1,
  b = 2;

console.log(`${a} + ${b} = ${penjumlahan(a, b)}`);
console.log(`${a} - ${b} = ${pengurangan(a, b)}`);
console.log(`${a} * ${b} = ${perkalian(a, b)}`);
console.log(`${a} / ${b} = ${pembagian(a, b)}`);

var hasilOperasiTerbesar = penjumlahan(a, b);
if (pengurangan(a, b) > hasilOperasiTerbesar) {
  hasilOperasiTerbesar = pengurangan(a,b);
} else if (perkalian(a, b) > hasilOperasiTerbesar) {
  hasilOperasiTerbesar = perkalian(a, b);
} else if (pembagian(a,b)>hasilOperasiTerbesar){
  hasilOperasiTerbesar = pembagian(a, b);
}
console.log(`Hasil Operasi Terbesar = ${hasilOperasiTerbesar}`);