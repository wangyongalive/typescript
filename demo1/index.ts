function greeter(person: string) {
    return `Hello, ${person}`
}
let user = 'wangyong'
greeter(user)
export { } // 在 Typescript 中，只要文件存在 import 或 export 关键字，都被视为 module