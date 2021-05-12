for (let li of document.getElementsByTagName('li')) {
    let data = li.firstChild.data; // значение внутри каждого тега li
    alert(data);
}

let number = document.getElementsByTagName('li').length;
console.log(number); // количество элементов li