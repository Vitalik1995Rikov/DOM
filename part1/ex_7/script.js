let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // выведет BODY
  // т.к. замееняем содержимое body на "<!--" + body.tagName + "-->"
  // а body.tagName - это BODY, т.к. имя тега всегда в верхнем регистре