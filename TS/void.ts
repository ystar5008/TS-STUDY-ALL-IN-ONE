const unk: unknown = "hello";
unk;
console.log(unk);
if (unk) unk;
else unk;

function neverfunc1() {
  throw new Error("에러");
}

const result1: never = neverfunc1();
const neverFunc2 = () => {
  throw new Error("에러");
};

const result2 = neverFunc2();

const infinite = () => {
  while (true) {
    console.log(123);
  }
};
