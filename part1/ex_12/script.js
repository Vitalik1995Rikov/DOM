let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };

  function createTree(container, obj) {
    container.append(createTreeDom(obj));
  }

 function createTreeDom(obj) {
     let ul = document.createElement('ul');
     for (let key in obj) {
         let li = document.createElement('li');
         li.innerHTML = key;

         let junLi = createTreeDom(obj[key]);
         li.append(junLi);
         ul.append(li);
     }
     return ul;
 } 

 let container = document.getElementById('container');
createTree(container, data);