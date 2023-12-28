//ДЗ-1
function myIsNaN(value) {
    if (value !== value) {
        return true; 
    } else {
        return false; 
    }
}
console.log(myIsNaN('Hello')); 
console.log(myIsNaN(12345)); 
console.log(myIsNaN(12+2)); 
console.log(myIsNaN(NaN)); 
console.log(myIsNaN(null)); 

//ДЗ-2
function pad(str, symbol, length, isStart) {
     if (str.length >= length) {
     return str;
    }
    const diff = length - str.length;
    const padString = symbol.repeat(diff);
    if (isStart) {
     return padString + str;
    } else {
     return str + padString;
    }
  }
  console.log(pad('qwerty', '+', 8, true)); // '+qwerty'
  console.log(pad('qwerty', '+', 8, false)); // 'qwerty+'
  console.log(pad('qwerty', '+', 6, true)); // 'qwerty'
  console.log(pad('qwerty', '+', 6, false)); // 'qwerty'

//ДЗ-3
function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
    
    for (let i = 0; i < count; i++) {
      let num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; // Генерация случайного числа в диапазоне от 100 до 1000
      if (num % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    console.log('Количество сгенерированных чисел:', count);
    console.log('Парных чисел:', evenCount);
    console.log('Не четных чисел:', oddCount);
    console.log('Процент парных к не четным:', (evenCount / count * 100) + '%');
  }
  checkProbabilityTheory(1000);