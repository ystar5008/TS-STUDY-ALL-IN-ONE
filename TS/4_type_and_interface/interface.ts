interface Person1 {
  name: string;
  age: number;
  married: boolean;
}

interface Func {
  (x: number, y: number): number;
}

const add: Func = (x, y) => x + y;

interface Arr {
  length: number;
  [key: number]: string;
}

const arr: Arr = ["1", "2", "3"];

interface Merge {
  one: string;
}

interface Merge {
  two: number;
}

interface Merge {
  three: string;
}

const example: Merge = {
  one: "1",
  two: 2,
};

interface Merge {
  three: number;
}

const str: Merge = 5;
