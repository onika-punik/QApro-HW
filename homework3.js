let year = prompt("Введите год получения");

if (!isNaN(year) && year > 0) {
  if (year % 10 === 1 && year % 100 !== 11) {
    console.log('${year} год');
  } else if (year % 10 >= 2 && year % 10 <= 4 && (year % 100 < 10 || year % 100 >= 20)) {
    console.log('${year} года');
  } else {
    console.log('${year} лет');
  }
} else {
  console.log("Вы ввели некорректное значение");
}
