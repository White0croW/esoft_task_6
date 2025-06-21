//---------------------------------------------------------------------------------
  //Задание 10:
  
  // Написать тип для преобразования методов класса в Promise-версии
  // Задача:
  // Создать тип Promisify<T>, который преобразует все методы класса так, чтобы они возвращали Promise.
  
  // Что нужно сделать:
  
  // Определить, какие свойства класса являются методами.
  
  // Заменить возвращаемый тип каждого метода на Promise<...>.
  
// Не трогать поля (не методы).
  
type Promisify<T> = {
    [K in keyof T]:
    T[K] extends (...args: any[]) => infer R ?
    (...args: Parameters<T[K]>) => Promise<R> :
    T[K];
  };
  
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
  
  
  