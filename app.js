
const person = {
  name: "bob",
  height: "5ft",
  color: "red",
  age: 50,
  getBirthYear() {
    return 2019 - this.age
  }
}

console.table(person);
console.log(person.getBirthYear())

for (let prop in person) {
  console.log(person[prop]);
}

(function bob() {
  let one;
  one = 1;
  console.log(one);
})();
const one = 5;



console.log(one);
