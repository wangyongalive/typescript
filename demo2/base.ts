
// 布尔值
let isDone: boolean = false

// 数字
let decLiteral: number = 20
let hexLiteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24


let name: string = 'bob'
name = 'smith'

// 数组 两种方式
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]


// 元祖:已知元素数量和类型的数组
let x: [string, number]
x = ['hello', 11]



// 枚举
enum Color {
    Red = 1,
    Green,
    Blues
}
let c: Color = Color.Green
let colorName: string = Color[2]

// any:跳过类型检测
let anySure: any = true
anySure = 'xxxx'
let listAny: any[] = [1, true, 'xxx']
listAny[1] = 'yyy'

// void：和any相反,表示没有任何类型。
// 1.函数的返回值
function warnUser(): void {
    console.log('warnUser');

}
// 2.只能赋予null或者undefined
let unusable: void = undefined

// undefined和null
let u: undefined = undefined
let n: null = null

// never
function error(message: string): never {
    throw new Error(message)
}
function fail() {
    return error('something failed')
}
function infiniteLoop(): never {
    while (true) {

    }
}

// object
declare function create(o: object | null): void
create({ prop: 0 })
create(null)


// 类型断言
// 1.方式1
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

// 2.方式2：jsx只能使用as
let someValue1: any = 'this is a string'
let strLength2: number = (someValue as string).length

export { }