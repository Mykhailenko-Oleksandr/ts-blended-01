interface User {
  name: string;
  age: number;
}

function createUser({ name, age }: User): User & { isAdmin: boolean } {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log(5, createUser({ name: "Alice", age: 30 }));

//   Завдання:

//   Типізуйте функцію повністю: параметри і повернення функції.
