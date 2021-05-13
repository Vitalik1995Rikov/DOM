

let allLinks = document.querySelectorAll('a'); // нашел все ссылки

for (let link of allLinks) {
    let href = link.getAttribute('href'); 
    if (!href) continue; // нет href, идем дальше
    if (href.includes('http://internal.com')) continue;//
    if (href.includes('://')) { // если есть, то меняем цвет
        link.style.color = 'orange';
    } 
}
