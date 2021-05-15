console.log(elem.scrollHeight);
console.log(elem.scrollWidth);
console.log(elem.scrollTop);



let scrollBottom = elem.scrollHeight - elem.scrollTop -  elem.clientHeight;
console.log(scrollBottom); // все минус верх, минус видимая часть