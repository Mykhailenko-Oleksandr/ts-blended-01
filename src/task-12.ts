function sendDoneStatus(callback: (value: string) => void): void {
  callback("done");
}

sendDoneStatus(() => {});

//   Завдання:

//   Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.
