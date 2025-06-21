//---------------------------------------------------------------------------------
//Разминка
// Определите интерфейс для пользователя
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
type Permissions<T> = T extends Admin ? AdminPermissions : BasicPermissions;
