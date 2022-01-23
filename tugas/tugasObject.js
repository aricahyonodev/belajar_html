// 1. Array : [ 2, 5, 10, saya, 29, 99, 38 ]
// Array : [ 100, 3, 66, 20, 'abjad' ]
// jika panjang array a + array b < 50,
// looping array with the condition,
// print the array if the index modulo = 0
// print the array of sum array a + array b
// print the array of string in array a + array b
// else print boolean

class malam {
  
  constructor(array1, array2, batas, penambah1 = 0, penambah2 = 0) {
    this.array1 = array1;
    this.array2 = array2;
    this.batas = batas;
    this.panjangArray = array1.length + array2.length + penambah1 + penambah2;
  }

  tampilkanPembatas(title) {
    console.log(`\n------------${title}--------------`);
  }

  loop(valMod = 0) {
    const arrayGabung = this.array1.concat(this.array2);
    console.log(arrayGabung);

    // Array Of Modulus
    this.tampilkanPembatas("Array Of Modulus");
    arrayGabung.map((data, i) => {
      if (i % 2 === valMod) console.log(`index: ${i} value: ${data}`);
    });

    // Array Of Sum
    this.tampilkanPembatas("Array Of Sum");
    const filteNumber = arrayGabung
      .filter((data) => typeof data == "number")
      .reduce((a, b) => a + b, 0);
    let arraySum = [];
    arraySum.push(filteNumber);
    console.log(arraySum);

    // Array Of String
    this.tampilkanPembatas("Array Of String");
    arrayGabung.map((data) => {
      if (typeof data == "string") console.log(data);
    });
  }
  
  tampilkanPanjangArray() {
    console.log(`===========================`);
    console.log(`panjang array: ${this.panjangArray}`);
  }

  //Main Function
  hitungKurang() {
    if (this.panjangArray < this.batas) {
      this.loop();
    } else {
      console.log(false);
    }
    this.tampilkanPanjangArray();
  }

  hitungTidakSama(valMod) {
    if (this.panjangArray !== this.batas) {
      this.loop(valMod);
    } else {
      console.log(true);
    }
    this.tampilkanPanjangArray();
  }
}

// Tugas 1
console.log("\n Tugas 1");
let ArrayA = [2, 5, 10, "saya", 29, 99, 38];
let ArrayB = [100, 3, 66, 20, "abjad"];
const mlm = new malam(ArrayA, ArrayB, 50)
mlm.hitungKurang();

// 2. Array : [ 3, 100, 283, 'saya', 'adalah', 'kapiten', 75 ]
// Array : [ 200, 300, 21, 'dari', indonesia ]
// jika array b + array b bukan 32,
// looping array with the condition
// print the array of string
// prtin the array of modulo = 1
// print the array of sum array a + array b
// else print boolean
// tugas 2
console.log("\n Tugas 2");
    ArrayA = [3, 100, 283, "saya", "adalah", "kapiten", 75];
    ArrayB = [200, 300, 21, "dari", "indonesia"];
    const mlm2 = new malam(ArrayA, ArrayB, 32);
    mlm2.hitungTidakSama(1);

// 3. Array: [ 29, 12, 30, 'ini', 'saya', 85 ]
// Array: [ 'cyber', 'security', 20, 15, 21]
// jika ( panjang array ) + a = 28,
// looping array with the condition
// print the array of string
// print the array of sum array a + array b
// print the array of modulo = 0
// else print boolean
// tugas 3
console.log("\n Tugas 3");
    let a = 12;
    ArrayA = [29, 12, 30, "ini", "saya", 85];
    ArrayB = ["cyber", "security", 20, 15, 21];
    const mlm3 = new malam(ArrayA, ArrayB, 28 , a);
    mlm3.hitungTidakSama(0);

// 4. Array: [ 20, 12, 43, 54, 24 ]
// Array: [ 'saya', 'adalah', 'seorang', 'pemusik', 0, 201]
// jika panjang array + 1 != 35,
// looping array with the condition
// print the array if the index modulo = 1
// print the array of string
// else print boolean
// tugas 4
console.log("\n Tugas 4");
    const panjangPenambah = 1;
    ArrayA = [29, 12, 30, "ini", "saya", 85];
    ArrayB = ["cyber", "security", 20, 15, 21];
    const mlm4 = new malam(ArrayA, ArrayB, 35, panjangPenambah);
    mlm4.hitungTidakSama(1);

// 5. Array: [ 20, 'empat', 'limat', 8, 29, 30 ]
// Array: [ 19, 'tujuh', 'sepuluh', 11, 23, 40 ]
// jika x + ( panjang array ) bukan 35,
// looping array with the condition
// print the array of sum array a + array b
// print the array of modulo = 0
// else print boolean
// tugas 5
console.log("\n Tugas 5");
    const x = 20;
    ArrayA = [29, 12, 30, "ini", "saya", 85];
    ArrayB = ["cyber", "security", 20, 15, 21];
    const mlm5 = new malam(ArrayA, ArrayB, 35, x);
    mlm5.hitungTidakSama(1);

// 6. Array: [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ]
// Array: [ 9, 7, 24, 'data', 'lima', 25]
// jika array a + array b + u bukan 25,
// looping array with the condition 
// print the array of sum array a + array b
// print the array if the index modulo = 1
// else print boolean
// tugas 6
console.log("\n Tugas 6");
    const u = 10;
    ArrayA = [29, 12, 30, "ini", "saya", 85];
    ArrayB = ["cyber", "security", 20, 15, 21];
    const mlm6 = new malam(ArrayA, ArrayB, 25, u);
    mlm6.hitungTidakSama(1);