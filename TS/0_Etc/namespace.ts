namespace Example {
  export namespace Outer {
    export interface Inner {
      test: string;
    }
    export type test2 = number;
  }
}

const ex1: Example.Outer.Inner = {
  test: "hello",
};

const ex2: Example.Outer.test2 = 2;

namespace Ex {
  export const a = "real";
}

const a = Ex; //{a:"real"}
const b = Ex.a; // 'real'
const c = Ex["a"]; //'rea;'

namespace 맥주 {
  export interface 카스 {
    가격: number;
  }

  export interface 필라이트 {
    가격: number;
  }

  export type 가격 = number;
  export type 가격 = number;
}


