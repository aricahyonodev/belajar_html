let a, b, c, x, y, total;
const bool = true;
// 1. Jika a = 50 looping a
// lainnya print Boolean
// Tugas 1
    a = 50;
    if (a === 50) {
        do {
            console.log(a);
            a--;
        } while (a >= 0);
    }else{
        console.log(bool);
    }

// 2. Jika a + b = bukan 32, looping b
// lainnya print Boolean
// Tugas 2
    a = 12;
    b = 30;
    total = a + b;
    if(total != 32){
        while (b >= 0) {
          console.log(b);
          b--;
        }
    }else{
        console.log(bool);
    }

// 3. Jika c + a = 28, looping c
// lainnya print Boolean
// Tugas 3
    a = 12;
    c = 16;
    total = c + a;
    if(total != 28){
        while (c >= 0) {
          console.log(c);
          c--;
        }
    }else{
        console.log(bool);
    }

// 4. Jika x = 35, looping x
// lainnya print Boolean
// Tugas 4
    x = 35;
    if (x === 35) {
    while (x >= 0) {
        console.log(x);
        x--;
    }
    } else {
    console.log(bool);
    }

// 5. Jika x + 7= 35, looping y
// lainnya print Boolean
// Tugas 5
    x = 28;
    total = x + 7;
    if(total === 35){
      for (x; x >= 0; x--) {
        console.log(x);
      }
    }else{
        console.log(bool);
    }

// 6. Jika c + y + a = 25, looping c
// lainnya print Boolean
// Tugas 6
    a = 10;
    c = 3;
    y = 12;
    total = c + y + a;
    if(total === 25){
      for (c; c >= 0; c--) {
        console.log(c);
      }
    }else{
        console.log(bool);
    }

