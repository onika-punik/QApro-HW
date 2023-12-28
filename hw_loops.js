// ДЗ-1
//Цикл for:
function drawTriangle(height, symbol) {
  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += symbol;
    }
    console.log(row);
  }
}
drawTriangle(7, '*');

//Цикл do while:
function drawTriangle(height, symbol) {
  let row = 1;
  do {
    let line = '';
    let count = 1;
    do {
      line += symbol;
      count++;
    } while (count <= row);
    console.log(line);
    row++;
  } while (row <= height);
}
drawTriangle(9, '*');

//ДЗ-2

sum=0
for (let i = 1; i <= 100; i++) {
  if(i % 3 != 0){
    sum=sum+i;
  }
}
console.log(sum)

//ДЗ-3

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(7,3))
