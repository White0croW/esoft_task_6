//---------------------------------------------------------------------------------
//Задание 11:

// Условие задачи
// Реализуйте тип Awaited<T>, который:
// Раскрывает тип значения, обёрнутого в Promise (аналогично встроенному Awaited в TypeScript 4.5+).
// Обрабатывает вложенные Promise (например, Promise<Promise<string>> → string).
// @ts-ignore
type Awaited<T> = T extends Promise<infer U>
    ? Awaited<U>
    : T extends object
    ? { [K in keyof T]: Awaited<T[K]> }
    : T;

// Не раскрывает другие типы (например, Array<Promise<string>> остаётся Array<Promise<string>>).
// Подсказки: почитайте про infer, extends и conditional types

// Пример использования:
type Example1 = Awaited<Promise<string>>;         // string
type Example2 = Awaited<Promise<Promise<number>>>; // number
type Example3 = Awaited<boolean>;                // boolean (не Promise)
type Example4 = Awaited<Array<Promise<string>>>; // Array<Promise<string>> (без изменений)


//Дополнительные задания
// Усложнённая версия: Реализуйте Awaited, который также раскрывает Promise внутри массивов:
type AwaitedDeep<T> = T extends Promise<infer U>
    ? AwaitedDeep<U>
    : T extends Array<infer V>
    ? Array<AwaitedDeep<V>>
    : T;

type Example = AwaitedDeep<Array<Promise<string>>>; // Array<string>
// Подсказка: Используйте { [K in keyof T]: Awaited<T[K]> }.
// Обработка null/undefined: Добавьте проверку, чтобы Awaited<Promise<null>> возвращал null, а не never.

