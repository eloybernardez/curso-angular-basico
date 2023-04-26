export const sum = (a: number, b: number) => {
  return a + b;
};

sum(4, 13);

class Person {
  constructor(private age: number, lastName: string) {}

  get getAge(): number {
    return this.age;
  }
}

const eloy = new Person(29, 'Bernardez');
console.log(eloy.getAge);
