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

type Validator<T> = {
  [K in keyof T]-?: T[K] extends object
  ? Validator<T[K]>
  : ValidationRules;
} & {
  [K in keyof T]?: T[K] extends object ? Validator<T[K]> : ValidationRules;
};

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