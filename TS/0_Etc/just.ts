type stringornumber = string | number;

let arr: number[] = [1, 2, 3];

/*
제네릭
*/
let arr2: Array<number> = [4, 5, 8, 6];

let arr3: [string, stringornumber] = ["ddd", "sdf"];

// enum Avengers {
//   Capt = 2,
//   IronMan,
//   Thor,
// }
// let hero: Avengers|string = Avengers[2]; // Capt
// let hero: Avengers|string = Avengers[4]; // Thor

//필수 인자값이 2개임
// function sum(a: number, b?: number): number {
//   return a + b;
// }
// sum(10, 20); // 30
// //3개를넣거나
// sum(10, 20, 30); // error, too many parameters
// //1개를 넣으면 에러발생
// sum(10); // error, too few parameters

interface Vue {
  el: string;
  count: number;
  init(this: Vue): () => {};
}

let vm: Vue = {
  el: "#app",
  count: 10,
  init: function (this: Vue) {
    return () => {
      return this.count;
    };
  },
};

let getCount = vm.init();
let count = getCount();
console.log(count); // 10
