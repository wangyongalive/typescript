"use strict";
exports.__esModule = true;
// 布尔值
var isDone = false;
// 数字
var decLiteral = 20;
var hexLiteral = 0x14;
var binaryLiteral = 20;
var octalLiteral = 20;
var name = 'bob';
name = 'smith';
// 数组 两种方式
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// 元祖:已知元素数量和类型的数组
var x;
x = ['hello', 11];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blues"] = 3] = "Blues";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
// any:跳过类型检测
var anySure = true;
anySure = 'xxxx';
var listAny = [1, true, 'xxx'];
listAny[1] = 'yyy';
// void：和any相反,表示没有任何类型。
// 1.函数的返回值
function warnUser() {
    console.log('warnUser');
}
// 2.只能赋予null或者undefined
var unusable = undefined;
// undefined和null
var u = undefined;
var n = null;
// never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('something failed');
}
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
// 类型断言
// 1.方式1
var someValue = 'this is a string';
var strLength = someValue.length;
// 2.方式2：jsx只能使用as
var someValue1 = 'this is a string';
var strLength2 = someValue.length;
