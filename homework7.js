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
    "Маникюр": 250,
    "Маникюр с покрытием Luxio": 450,
    "Педикюр с покрытием Luxio": 500
  };
  services.price = function() {
    var total = 0;
    for (var service in this) {
      if (typeof this[service] === 'number') {
        total += this[service];
      }
    }
    return total;
  };

  services.minPrice = function() {
    var min = Infinity;
    for (var service in this) {
      if (typeof this[service] === 'number' && this[service] < min) {
        min = this[service];
      }
    }
    return min;
  };
  
  services.maxPrice = function() {
    var max = 0;
    for (var service in this) {
      if (typeof this[service] === 'number' && this[service] > max) {
        max = this[service];
      }
    }
    return max;
  };
  console.log(services.price()); 
  console.log(services.minPrice()); 
  console.log(services.maxPrice()); 

  services["Мужской маникюр"] = 300;
