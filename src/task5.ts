//---------------------------------------------------------------------------------
//Задание 5: Работа с Indexed Access Types и Mapped Types
//Цель: Создать утилиты для работы с объектами и их ключами.

// Определите интерфейс для пользователя
// @ts-ignore
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Используйте Indexed Access Types для получения типа поля name из User
type UserNameType = User['name']// Заполните тип

// Создайте Mapped Type, который преобразует все поля интерфейса User в boolean. Можно воспользовать конструкцией Key in keyof 
type UserFieldsToBoolean = {
    [K in keyof User]: boolean;
};

// Реализуйте функцию, которая принимает ключи интерфейса User и возвращает их типы
function getUserFieldType<K extends keyof User>(key: K): User[K] {
    // Верните тип ключа
    const user: User = { id: 1, name: "Alice", email: "a@example.com", age: 35 };
    return user[key];
}

// Используйте эту функцию для получения типа поля 'age' и 'name'
const ageType = getUserFieldType('age');
const nameType = getUserFieldType('name');
//---------------------------------------------------------------------------------






