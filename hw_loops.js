// ДЗ-1

function drawTriangle(length) {
  var line = "";
  for (var a = 1; a <= length; a++) {
    for (var b = 0; b < a; b++) {
      line += "* ";
    }
    line += '\n'; 
  }
  return line;
}
console.log(drawTriangle(7));

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
