let unit = prompt('Пожалуйста,введите единицу измерения')
let amount = prompt('Пожалуйста,введите количество');
switch (unit) {
    case "км":
        let meters = amount * 1000;
        console.log(`${amount} км - это ${meters} м.`);
        break;
    case "ч":
        let minutes = amount * 60;
        console.log(`${amount} ч - это ${minutes} мин.`);
        break;
    case "кг":
        let gramm = amount * 1000;
        console.log(`${amount} кг - это ${gramm} г.`);
        break;
    default:
        console.log("Неподдерживаемая единица измерения");
}