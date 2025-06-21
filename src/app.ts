  //---------------------------------------------------------------------------------
  // Задание 9:
  // Реализовать DeepReadonly<T>
  // Задача:
  // Создать тип, который делает все поля объекта (включая вложенные) доступными только для чтения (readonly).

  // Что нужно сделать:

  // Обработать объекты рекурсивно.

  // Учесть массивы и другие структуры данных.

  // Не трогать примитивы (string, number, boolean).
  // Подсказки:
  // Используйте условные типы (extends, infer) для сложных проверок.
  // Для рекурсии ограничивайте глубину (иначе TypeScript может зависнуть):
  // Мы делали нечто похожее в рамках задачи по Partial типу. Подумайте теперь как сделать свой readonly, еще и глубокий.


//Прмер:
// @ts-ignore
  type User = {
    name: string;
    address: {
      city: string;
      street: string;
    };
    hobbies: string[];
  };
  
  type DeepReadonlyUser = DeepReadonly<User>;
  /* Результат:
  {
    readonly name: string;
    readonly address: {
      readonly city: string;
      readonly street: string;
    };
    readonly hobbies: readonly string[];
  }
  */
  //---------------------------------------------------------------------------------
  
  
  
  
  
  
  
  //---------------------------------------------------------------------------------
  //Задание 10:
  
  // Написать тип для преобразования методов класса в Promise-версии
  // Задача:
  // Создать тип Promisify<T>, который преобразует все методы класса так, чтобы они возвращали Promise.
  
  // Что нужно сделать:
  
  // Определить, какие свойства класса являются методами.
  
  // Заменить возвращаемый тип каждого метода на Promise<...>.
  
  // Не трогать поля (не методы).
  
  // Пример:
  
  // class UserService {
  //   getUser(id: number): User { ... }
  //   saveUser(user: User): void { ... }
  //   version: string = "1.0";
  // }
  
  // type AsyncUserService = Promisify<UserService>;
  // /* Результат:
  // {
  //   getUser(id: number): Promise<User>;
  //   saveUser(user: User): Promise<void>;
  //   version: string;
  // }
  // */
  
  
  //---------------------------------------------------------------------------------
  //Задание 11:
  
  // Условие задачи
  // Реализуйте тип Awaited<T>, который:
  // Раскрывает тип значения, обёрнутого в Promise (аналогично встроенному Awaited в TypeScript 4.5+).
  // Обрабатывает вложенные Promise (например, Promise<Promise<string>> → string).
  
  // Не раскрывает другие типы (например, Array<Promise<string>> остаётся Array<Promise<string>>).
  // Подсказки: почитайте про infer, extends и conditional types
  
  // Пример использования:
  type Example1 = Awaited<Promise<string>>;         // string
  type Example2 = Awaited<Promise<Promise<number>>>; // number
  type Example3 = Awaited<boolean>;                // boolean (не Promise)
  type Example4 = Awaited<Array<Promise<string>>>; // Array<Promise<string>> (без изменений)
  
  
  Дополнительные задания
  // Усложнённая версия: Реализуйте Awaited, который также раскрывает Promise внутри массивов:
  
  type Example = AwaitedDeep<Array<Promise<string>>>; // Array<string>
  // Подсказка: Используйте { [K in keyof T]: Awaited<T[K]> }.
  // Обработка null/undefined: Добавьте проверку, чтобы Awaited<Promise<null>> возвращал null, а не never.
  
  //Задание 12:
  // Создать тип для валидации формы с динамическими полями
  // Задача:
  // Создать тип Validator<T>, который описывает правила валидации для каждого поля формы:
  
  // Поле может быть обязательным (required).
  
  // Могут быть кастомные проверки (например, minLength, isEmail).
  
  // Что нужно сделать:
  
  // Для каждого поля объекта создать набор правил валидации.
  
  // Поддержать обязательные и необязательные поля.
  
  // Учесть вложенные объекты (если нужно).
  
  // Пример:
  type UserForm = {
    name: string;
    age?: number;
    address: {
      city: string;
    };
  };
  
  type UserValidator = Validator<UserForm>;
  /* Результат:
  {
    name: { required: true; minLength?: number };
    age?: { required: false; isPositive?: boolean };
    address: {
      city: { required: true };
    };
  }
  */
  
  
  // Подсказки:
  // Используйте Partial<T> для необязательных полей.
  
  // Для рекурсивной обработки вложенных объектов: T[K] extends object ? Validator<T[K]> : ....
  
  // Базовый интерфейс правил:
  interface ValidationRules {
    required?: boolean;
    minLength?: number;
    isEmail?: boolean;
    // ... другие правила
  }