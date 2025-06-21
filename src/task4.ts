//---------------------------------------------------------------------------------  
// Задание 4: Использование Utility Types для работы с интерфейсами
// Цель: Модифицировать интерфейсы для специфических нужд без изменения оригинальных интерфейсов.

// Определите интерфейс Employee
interface Employee {
    id: number;
    name: string;
    department: string;
    email: string;
}

// Используйте Utility Type для создания типа, который делает все свойства Employee опциональными
type PartialEmployee = Partial<Employee>// Заполните тип

// Используйте Utility Type для создания типа, который делает все свойства Employee доступными только для чтения
type ReadonlyEmployee = Readonly<Employee>// Заполните тип

// Создайте функцию, которая принимает PartialEmployee и выводит информацию о сотруднике
function printEmployeeInfo(employee: PartialEmployee) {
    // Реализуйте логику функции, обрабатывая случай отсутствующих свойств
    if (employee.id) console.log(`ID: ${employee.id}`);
    if (employee.name) console.log(`Name: ${employee.name}`);
    if (employee.department) console.log(`Department: ${employee.department}`);
    if (employee.email) console.log(`Email: ${employee.email}`);
}
//---------------------------------------------------------------------------------




