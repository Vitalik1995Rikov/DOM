button.addEventListener("click", () => alert("1")); // 1

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2); // 2

// выведется 1 и 2
// remove не удалит, потому что он удаляет аналогичную функция, а не ту же самую