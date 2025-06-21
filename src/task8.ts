//---------------------------------------------------------------------------------
// Задание 8: Реализация обобщённой функции для сопоставления и преобразования элементов массива
// Цель: Создать функцию mapAndFilter, которая будет принимать массив объектов, функцию для их преобразования и функцию для фильтрации результатов. Функция должна использовать два параметра Generic: один для типа элементов входного массива, а другой для типа элементов выходного массива.

// Описание задачи: Функция mapAndFilter должна выполнить следующие функции:
// Применить функцию преобразования ко всем элементам входного массива.
// Фильтровать преобразованные элементы с помощью предоставленной функции фильтрации.
// Возвращать новый массив с результатами, которые прошли фильтрацию.
interface Person {
    name: string;
    age: number;
}

interface Adult {
    fullName: string;
    age: number;
}

// Напишите функцию mapAndFilter здесь. Используйте два параметра Generic: T для типа входных данных и U для типа выходных данных.
function mapAndFilter<T, U>(
    items: T[],
    transform: (item: T) => U,
    filter: (item: U) => boolean
): U[] {
    return items
        .map(transform)
        .filter(filter);
}

// Пример данных
const people: Person[] = [
    { name: "Alice", age: 24 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 32 }
];

// Пример использования функции mapAndFilter
const adults: Adult[] = mapAndFilter(
    people,
    (person) => ({ fullName: person.name, age: person.age }),
    (adult) => adult.age >= 18
);

// Выведите результаты для проверки
console.log(adults);

//Вопросы после реализации:
// Как изменится функция, если необходимо добавить возможность изменения критерия сортировки?
function mapAndFilterChangeCriteriaSort<T, U>(
    items: T[],
    transform: (item: T) => U,
    filter: (item: U) => boolean,
    comparator?: (a: U, b: U) => number
): U[] {
    const transformed = items.map(transform);
    const filtered = transformed.filter(filter);
    if (comparator) {
        return filtered.sort(comparator); // Сортировка по указанному критерию
    }
    return filtered;
}

const sortedAdults = mapAndFilterChangeCriteriaSort(
    people,
    (person) => ({ fullName: person.name, age: person.age }),
    (adult) => adult.age >= 18,
    (a, b) => a.age - b.age // Сортировка по возрасту
);
// Могут ли типы T и U быть полностью разными или должны иметь общие характеристики? Объясните ваш ответ.
//Типы T и U не обязаны быть связаны
//Причина: T — это тип входных данных, а U — тип выходных данных после преобразования.
//Связь между ними: Единственное требование — функция transform: (item: T) => U должна корректно преобразовывать T в U.
//---------------------------------------------------------------------------------




