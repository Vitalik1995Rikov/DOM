 let one = document.body.scrollHeight;
 let two = document.body.clientHeight;
 let three = document.body.offsetHeight;
 console.log(one, two, three); // одинаковы, но не всегда
 // иногда бывает полезным получить максимальное из этих значений

let scroll = Math.max(one, two, three);
console.log(scroll);

function up() {
    window.scrollTo(0,0);
    console.log('работает')
}