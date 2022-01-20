//Main Function
const loopArray = (data) => data.map((data) => console.log(data)); 
const bool      = true;

const kurangDariPembanding = (dataArray, nilaiPembanding)=>{
    const panjangArray = dataArray.length;
    panjangArray < nilaiPembanding ? loopArray(data) :  console.log(bool);
    console.log(`Panjang Array: ${panjangArray}`);
}
const bukanDenganPembanding = (dataArray, nilaiPembanding, params1, params2 = 0)=>{
    const panjangArray = dataArray.length + params1 +  params2;
    panjangArray !== nilaiPembanding ? loopArray(data) :  console.log(bool);
    console.log(`Panjang Array: ${panjangArray}`);
}

// Definisi Variable Tugas 
let data = [];
let a, b, c, x;

// 1. Array : [ 2, 5, 10, 'ini dia', 'data', 100 , 38 ]
// jika panjang array kurang dari 50, looping array
// else print boolean
// Tugas 1
    data = [2, 5, 10, "ini dia", "data", 100, 38];
    kurangDari(data, 5);

// 2. Array : [ 3, 100, 283, 'saya', 'adalah', 'kapiten', 75 ]
// jika b + ( panjang array ) bukan 32, looping array
// else print boolean
// Tugas 2
    b = 25;
    data = [3, 100, 283, "saya", "adalah", "kapiten", 75];
    bukanDenganPembanding(data, 32, b);

// 3. Array: [ 29, 12, 30, 'ini', 'saya', 85 ]
// jika ( panjang array ) + a = 28, looping array
// else print boolean
// Tugas 3
    a = 22;
    data = [29, 12, 30, "ini", "saya", 85];
    bukanDenganPembanding(data, 28, a);
   
// 4. Array: [ 20, 12, 43, 54, 24 ]
// jika panjang array + 1 bukan 35, looping array
// else print boolean
// Tugas 4
    a = 1;
    data = [20, 12, 43, 54, 24];
    bukanDenganPembanding(data, 35, a);
// 5. Array: [ 20, 'empat', 'limat', 8, 29, 30 ]
// jika x + ( panjang array ) bukan 35, looping array
// else print boolean
// Tugas 5
    x = 30;
    data = [20, 12, 43, 54, 24];
    bukanDenganPembanding(data, 35, x);
// 6.  Array: [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ]
// jika c + ( panjang array ) + a bukan 25, looping array
// else print boolean
// Tugas 6
    a = 12;
    c = 3;
    data = ["data", "empat", 8, 3, 100, 8, 100, 3];;
    bukanDenganPembanding(data, 25, c, a);

