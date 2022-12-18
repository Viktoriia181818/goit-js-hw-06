
// 1) створити змінну і знайти усі класи item
// 2) cтворити змінну, яка виводить кількість категорій
// 3) перебрати масив 
// 4) створити змінну і знайти усі заголовки, та додати текст контент до них
// 5) створити змінну яка виводить кількість елементів
// 6) вивести усе в консоль

// 1 умова до завдання
const totalItem = document.querySelectorAll('.item');
const totalItemall = totalItem.length;

console.log(`Number of categories: ${totalItemall}`);

// 2 умова до завдання
totalItem.forEach((element) => {
    const elementTitle = element.querySelector('h2').textContent;
    const oneElement = element.querySelectorAll('li');
    const oneElementlength = oneElement.length;

    console.log(`Category: ${elementTitle}`);
    console.log(`Elements: ${oneElementlength}`);
});