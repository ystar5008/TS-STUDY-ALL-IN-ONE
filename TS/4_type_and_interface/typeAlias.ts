type ValueWithInit = (value: number, unit: string) => string;

const func: ValueWithInit = (value, unit) => value + unit;

const person1: {
  name: string;
  age: number;
  married: boolean;
} = {
  name: "km",
  age: 28,
  married: false,
};

type Person = {
  name: string;
  age: number;
  married: boolean;
};

const person2: Person = {
  name: "lee",
  age: 20,
  married: true,
};

const person3: Person = {
  name: "park",
  age: 40,
  married: true,
};
