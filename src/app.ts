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