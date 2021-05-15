function countRabbits() {
    for (let i = 1; i <= 3; i++) {
        alert(`кролик номер ${i}`)
    }
}

elem.onclick = function(event) {
    alert('первое событие - ' + event.type)
}

function two() {
    alert('второй обработчик')
}

function tree() {
    alert('третий обработчик')
}

elem.addEventListener('click', two);
elem.addEventListener('click', tree);



class Menu {
    handleEvent(event) {
        switch (event.type) {
            case 'mousedown':
                elemNew.innerHTML = 'нажата кнопка';
                break;
            case 'mouseup':
                elemNew.innerHTML = 'отжата кнопка';
                break;
        }
    }
}

let menu = new Menu();

elemNew.addEventListener('mousedown', menu);
elemNew.addEventListener('mouseup', menu);