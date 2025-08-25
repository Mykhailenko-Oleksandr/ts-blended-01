interface Currency {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}

function convertCurrency({ amount, currency }: Currency): void {
  console.log(2, `Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 10, currency: "UAH" });

// Задача 2

// Опис: Є функція, яка приймає суму (число) та тип валюти.

// Завдання:

// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.
