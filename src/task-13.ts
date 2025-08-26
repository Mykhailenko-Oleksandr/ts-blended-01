type Action = "increment" | "decrement";

function reducer(state: number, action: Action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

console.log(13, reducer(10, "decrement"));

//   Завдання:

//   Типізуйте state як число.
//   Створіть тип Action, що може приймати як значення лише рядки increment та decrement.
//   Типізуйте функцію повністю.
