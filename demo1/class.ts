class User {
    fullName: string
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
        this.lastName = firstName
        this.lastName = lastName
        this.fullName = `${firstName} ${lastName}`
    }
}

interface Person {
    firstName: string
    lastName: string
}

function greeter(person: Person) {
    return `${person.firstName} ${person.lastName}`
}
let user = new User('wang', 'yong')
/*class 和 interface之间有很好的兼容性*/
greeter(user)

export { }