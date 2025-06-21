//---------------------------------------------------------------------------------
//Разминка
// Определите интерфейс для пользователя
// @ts-ignore
interface User {
    id: number;
    name: string;
    email: string;// Добавьте свойство email типа string
}

// Определите интерфейс для активности пользователя
interface Activity {
    userId: number;
    activity: string;
    timestamp: Date;// Добавьте свойство timestamp типа Date
}

// Реализуйте функцию fetchData используя Generic. Функция должна возвращать Promise.
async function fetchData<T>(url: string): Promise<T> {
    // Реализуйте получение данных с использованием fetch и возвращение их в формате json
    const response = await fetch(url);
    return response.json()
}

// Используйте Utility Types для создания Partial и Readonly версий User и Activity
type PartialUser = Partial<User>;// Заполните тип
type ReadonlyActivity = Readonly<Activity>;// Заполните тип

//Типизируйте функцию. userId - число
function getUserActivities(userId: number) {
    return fetchData<Activity[]>(`/api/activities/${userId}`);
}
// Используйте ReturnType для создания типа возвращаемого значения функции getUserActivities
type ActivitiesReturnType = ReturnType<typeof getUserActivities>;// Заполните тип

// Используйте extends в условных типах для создания типа Permissions
type AdminPermissions = { canBanUser: boolean };
type BasicPermissions = { canEditProfile: boolean };
// Заполните тип. Должен выявляться на основне некоторого дженерика и опредять, какой из пермишенов выдавать: Admin или Basic.
type Admin = { role: 'admin' };
// @ts-ignore
type Permissions<T> = T extends Admin ? AdminPermissions : BasicPermissions;

///ЧАСТЬ 2.

// Определите Type Alias для Union типа String или Number
type StringOrNumber = string | number;// Заполните тип

// Реализуйте функцию logMessage, которая принимает StringOrNumber и не возвращает значение (void)
function logMessage(message: StringOrNumber): void {
    // Реализуйте вывод сообщения в консоль
    console.log(message);
}

// Реализуйте функцию throwError, которая никогда не возвращает управление (never)
function throwError(errorMsg: string): never {
    // Бросьте исключение с errorMsg
    throw new Error(errorMsg);
}

// Реализуйте Type Guard для проверки, является ли значение строкой
function isString(value: StringOrNumber): value is string {
    // Верните результат проверки типа
    return typeof value === 'string';
}

// Реализуйте функцию assertIsNumber, которая использует asserts для утверждения типа number
function assertIsNumber(value: any): asserts value is number {
    // Бросьте исключение, если значение не является числом
    if (typeof value !== 'number') {
        throw new Error('Value is not a number');
    }
}

// Завершите функцию processValue, используя isString и assertIsNumber
function processValue(value: StringOrNumber) {
    // Реализуйте логику проверки и обработки значения
    if (isString(value)) {
        console.log(`String value: ${value.toUpperCase()}`);
    } else {
        assertIsNumber(value);
        console.log(`Number value: ${value.toFixed(2)}`);
    }
}

//---------------------------------------------------------------------------------
// Задание 2: Расширенное использование Generics
// Цель: Создать универсальную функцию обработки данных, которая может работать с различными типами данных.

// Определите Generic интерфейс Response с одним параметром типа T. Второй параметр status: number
// @ts-ignore
interface Response<T> {
    data: T;
    // @ts-ignore
    status: number;
}

// Реализуйте и типизируйте функцию, которая возвращает объект Response для переданных данных

function createResponse<T>(data: T, status: number): Response<T> {
    // Реализуйте создание и возврат объекта Response
    // @ts-ignore
    return { data, status };
}

// Используйте функцию createResponse для создания ответа с массивом чисел
const numericResponse = createResponse<number[]>([1, 2, 3], 200);// Заполните вызов функции

// Используйте функцию createResponse для создания ответа с объектом пользователя (User)
const userResponse = createResponse<User>(
    { id: 1, name: "Alice", email: "a@example.com" },
    200
); // Заполните вызов функции
//---------------------------------------------------------------------------------

