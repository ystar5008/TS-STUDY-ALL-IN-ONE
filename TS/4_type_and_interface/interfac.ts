//인터페이스는 상호 간에 정의한 약속 혹은 규칙을 의미
/*
1. 객체의 스펙(속성과 속성의 타입)
2. 함수의 파라미터
3. 함수의 스펙(파라미터, 반환타입)
4. 배열과 객체를 접근하는 방식
5. 클래스
*/

let person = { name: "john", age: 28 };

function logAge(obj: personAge) {
  console.log(obj); // 28
  console.log(obj.age); // 28
}
logAge(person); // 28

interface personAge {
  name?: string;
  age: number;
}

interface CraftBeer {
  //readonly 읽기전용 속성은 객체를 처음생성할 때만 값을 할당하고 그 이후에는 변경할 수 없는 속성을 의미함
  readonly brand: string;
  name: string;
  hop?: number;
}

let myBeer: CraftBeer = {
  brand: "cass",
  name: "Saporo",
  hop: 28,
};
//"cass"로 선언한 값은 readonly속성으로 인해 다시 할당할 수 없음
//myBeer.brand = "mybeer";

function brewBeer(beer: CraftBeer) {
  console.log(beer.name); // Saporo
}
brewBeer(myBeer);

let arr: ReadonlyArray<number> = [1, 2, 3];
//타입을 선언하는 시점에만 값을 정의할수 있음
// arr.splice(0,1); // error
// arr.push(4); // error
// arr[0] = 100; // error

interface IfoodInfo {
  taste?: string;
  //정의하지 않은 속성들을 추가로 사용가능
  [propName: string]: any;
}

function food(food: IfoodInfo): any {
  return console.log(food);
}

//인터페이스에 정의한 타입추론을 무시함 오타무시
food({ tastee: "salty", price: 500 } as IfoodInfo);
//인터페이스에 정의한 타입 검증
//food({ tastee: "salty" });

interface login {
  (username: string, password: string): boolean;
}

let loginUser: login;
loginUser = function (id: string, pw: string) {
  console.log(id, pw);
  if (!id || !pw) return false;
  console.log("로그인 했습니다");
  return true;
};

loginUser("ys", "123");
