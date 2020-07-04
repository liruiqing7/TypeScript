/**
 * interface 编译后生成的js文件
 */

var getPersonName = function (person) {
  console.log(person.name);
};
var setPersonName = function (person, name) {
  person.name = name;
};
var person = {
  name: "dell",
  age: 18,
  sex: "male",
  say: function () {
    return "say hello";
  },
  teach: function () {
    return "lee";
  },
};

getPersonName(person);
setPersonName(person, "lee");
var User = /** @class */ (function () {
  function User() {
    this.name = "dell";
  }
  User.prototype.say = function () {
    return "hello";
  };
  return User;
})();
var say = function (word) {
  return "hello lee";
};
