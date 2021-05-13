let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let value = prompt('Введи что-то', 'текст');
    if (!value) {
        break;
    }
    let li = document.createElement('li');
    li.textContent = value
    ul.append(li);
}