function greeter(person) {
  // 对编辑器非常友好
  return "Hello, ".concat(person.firstName, " ").concat(person.lastName);
}
var user = {
  firstName: "wang",
  lastName: "yong",
};
greeter(user);
