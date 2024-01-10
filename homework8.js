//ДЗ-1 - Тасовать массив //
function myBlend(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Начальный массив:", arr);

myBlend(arr);
console.log("Перемешанный массив:", arr);

//ДЗ-2 - BigBoss//
//1й метод//
function findValueByKey(data, companyName) {
  if (data.name === companyName) {
    return data;
  }
  if (data.partners) {
    for (let partner of data.partners) {
      const foundData = findValueByKey(partner, companyName);
      if (foundData) {
        return foundData;
      }
    }
  }
  if (data.clients) {
    for (let client of data.clients) {
      const foundData = findValueByKey(client, companyName);
      if (foundData) {
        return foundData;
      }
    }
  }
  return null;
}

const company = {
  name: "большая компания",
  type: "главная компания",
  platform: "платформа для продажи билетов",
  sellsSolution: "решение для продажи билетов",
  clients: [
    {
      name: "клиент 1",
      type: "subcompany",
      uses: "по для продажи билетов",
      sells: "решение для продажи билетов",
      partners: [
        {
          name: "клиент 1.1",
          type: "subsubcompany",
          uses: "решение для продажи билетов",
          sells: "решение для продажи билетов",
        },
        {
          name: "клиент 1.2",
          type: "subsubcompany",
          uses: "решение для продажи билетов",
          sells: "решение для продажи билетов",
          partners: [
            {
              name: "клиент 1.2.3",
              type: "subsubcompany",
              uses: "решение для продажи билетов",
              sells: "решение для продажи билетов",
            },
          ],
        },
      ],
    },
    {
      name: "клиент 2",
      type: "subcompany",
      uses: "по для продажи билетов",
      sells: "решение для продажи билетов",
    },
  ],
};

console.log(findValueByKey(company, "клиент 1.2.3"));

//2й метод//
const company = {
  name: "большая компания",
  type: "главная компания",
  platform: "платформа для продажи билетов",
  sellsSolution: "решение для продажи билетов",
  clients: [
    {
      name: "клиент 1",
      type: "subcompany",
      uses: "по для продажи билетов",
      sells: "решение для продажи билетов",
      partners: [
        {
          name: "клиент 1.1",
          type: "subsubcompany",
          uses: "решение для продажи билетов",
          sells: "решение для продажи билетов",
        },
        {
          name: "клиент 1.2",
          type: "subsubcompany",
          uses: "решение для продажи билетов",
          sells: "решение для продажи билетов",
          partners: [
            {
              name: "клиент 1.2.3",
              type: "subsubcompany",
              uses: "решение для продажи билетов",
              sells: "решение для продажи билетов",
            },
          ],
        },
      ],
    },
    {
      name: "клиент 2",
      type: "subcompany",
      uses: "по для продажи билетов",
      sells: "решение для продажи билетов",
    },
  ],
};

function findValueByKey(data, companyName) {
  if (data.clients) {
    return data.clients.find((company) => company.name == companyName);
  }
  return null;
}

console.log(findValueByKey(company, "клиент 1"));
