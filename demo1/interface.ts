interface Person {
    firstName: string
    lastName: string
}
function greeter(person: Person) {
    // 对编辑器非常友好
    return `Hello, ${person.firstName} ${person.lastName}`
}
let user = {
    firstName: 'wang',
    lastName: 'yong'
}
greeter(user)
export {}