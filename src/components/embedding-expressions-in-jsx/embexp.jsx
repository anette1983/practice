function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

export const element = <h1>Hello, {formatName(user)}!</h1>;

// function withdraw(account, amount) {
//   account.total -= amount;
//   console.log('account :>> ', account);
//   console.log('amount :>> ', amount);
// }
// withdraw({ total: 500 }, 50);
//  функція нечиста, оскільки вона змінює свої власні аргументи

// function sum(a, b) {
//   return a + b;
// }
// Чисті фкції не намагаються змінити свої аргументи і завжди повертають один і той же результат для тих же аргументів.
//* В реакті пропси можна тідьки читати і не можна змінювати
