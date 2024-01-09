//ДЗ-1 - Без Аа//
var str = "Пример текста";
var re = /^(?!.*[Аа]).{6,}$/.test(str);
console.log(re); 

var str = "Пример примеров";
var re = /^(?!.*[Аа]).{6,}$/.test(str);
console.log(re); 

//ДЗ-2 - Паранойя//
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    },
];
var trustedEmails = arr.filter(function(obj) {
    var emailRegex = /^[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;
    return emailRegex.test(obj.email);
}).map(function(obj) {
    return obj.email;
});

console.log(trustedEmails);
