

let div = document.createElement('div');
div.innerHTML = '<b>Text</b>';
document.body.append(div);


let liStart = document.createElement('li');
liStart.innerHTML = 'start';
div.prepend(liStart);

let liEnd = document.createElement('li');
liEnd.innerHTML = 'end';
div.append(liEnd);

div.prepend('before');
div.append('after');


let divNew = div.cloneNode(true);
div.after(divNew);

