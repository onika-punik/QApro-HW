//ДЗ-1
let PS5 = {
  model: "PlayStation 5",
  storageCapacity: "1TB",
  color: "White",

  getInfo: function() {
    for (let key in this) {
      if (typeof this[key] !== 'function') {
        console.log(key + ": " + this[key]);
      }
    }
  }
};
PS5.getInfo(); 
PS5.newProperty = ' Price - 499$'; 
PS5.getInfo(); 

//ДЗ-2
var services = {
"стрижка": "60 грн",
"бритье": "80 грн",
"Мойка головы": "100 грн"
};

services['Разбить стекло'] = "200 грн";

services.price = function() {
var total = 0;
for (var service in this) {
    if (typeof this[service] === 'string') {
        total += parseInt(this[service]);
    }
}
return total + " грн";
};
services.minPrice = function() {
var min = Infinity;
for (var service in this) {
    if (typeof this[service] === 'string') {
        var price = parseInt(this[service]);
        if (price < min) {
            min = price;
        }
    }
}
return min + " грн";
};
services.maxPrice = function() {
var max = 0;
for (var service in this) {
    if (typeof this[service] === 'string') {
        var price = parseInt(this[service]);
        if (price > max) {
            max = price;
        }
    }
}
return max + " грн";
};

console.log(services.price()); 
console.log(services.minPrice()); 
console.log(services.maxPrice()); 
