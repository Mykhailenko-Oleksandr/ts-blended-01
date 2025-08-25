interface Container<T> {
  items: T[];
  addItem(element: T): void;
  getItem(index: number): T;
}

const numberContainer: Container<number> = {
  items: [1, 2, 3, 4],
  addItem(element) {
    this.items.push(element);
  },
  getItem(index) {
    return this.items[index];
  },
};

const stringContainer: Container<string> = {
  items: ["a", "b", "c", "d"],
  addItem(element) {
    this.items.push(element);
  },
  getItem(index) {
    return this.items[index];
  },
};

// numberContainer.addItem(7)
console.log(numberContainer.getItem(2));

// function getLastElement(arr: Container[keyof]) {
//     return arr[arr.length - 1];
// }

// Завдання:

// 1. Створіть інтерфейс Container, що містить:

// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2.  Створіть два контейнери:

// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.

// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

// Примітка:

// Контейнер має підтримувати тільки один тип елементів.
