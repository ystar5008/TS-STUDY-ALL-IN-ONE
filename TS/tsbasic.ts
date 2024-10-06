//기본적인 타입 선언
const str: string = '아무문자';
//string 자리에 number 타입 데이터를 할당하면 에러
//const str2: string = 1;

//type 키워드로 지정된 타입 선언
//지정된 타입만 변수에 할당 될 수 있도록 type키워드로 타입선언
type 숫자혹은문자타입가능 = string | number;
//strOrNum1변수에는 string 혹은 number 타입만 할당될 수 있음
const strOrNum1: 숫자혹은문자타입가능 = '안녕하세요';
//strOrNum2변수에 number 타입 데이터 할당
const strOrNum2: 숫자혹은문자타입가능 = 3002;
//null은 할당 될 수 없음
//const strOrNum3: 숫자혹은문자타입가능 = null;

//number타입만 할당
let num: number = 10;
//string타입만 할당
let str3: string = 'Hello';
//boolean타입만 할당
let bool: boolean = true;
//배열에 숫자만 할당
let arr: number[] = [1, 2, 3];
//tuple 지정된 타입 및 갯수만 할당 string,number 배열 요소도 2개
let tuple: [string, number] = ['John', 25];
//obj의 key와 value 값을 차례대로 선언
let obj: { key: string; value: number } = { key: 'age', value: 25 };

//함수의 매개변수와 return되는 타입선언
function plus(x: number, y: number): number | string {
    //숫자가 클때는 string 리턴
    if (x + y >= 10) return '숫자가 크네요';
    //숫자가 작을 때는 number 리턴
    else return x + y;
}

console.log(plus(2, 3));

type userInformationType = { name: string; age: number };
function userInformation(name: string, age: number): userInformationType {
    console.log(`유저의 이름은 ${name} 입니다 나이는 ${age}`);
    //{name : name , age: age}
    return { name, age };
}

const returnValue: userInformationType = userInformation('김용식', 25);
//유저의 이름은 김용식 입니다
//김용식
//25
console.log(returnValue.name);
console.log(returnValue.age);

//인터페이스로 객체의 타입 선언하기
interface Animal {
    name: string;
    tail: boolean;

    bark(sound: string): string;
}

//Animal 인터페이스를 구현한 Animal 클래스
class AnimalImpl implements Animal {
    //클래스의 멤버 변수 선언
    name: string;
    tail: boolean;
    eat: string;
    constructor(name: string, tail: boolean, eat: string) {
        this.name = name;
        this.tail = tail;
        this.eat = eat;
    }
    bark(sound: string): string {
        try {
            if (sound === 'wall') {
                return sound;
            }
            if (sound.length < 0) {
                throw new Error('Method not implemented.');
            }
        } catch (e) {
            console.error(e);
        }
        return sound;
    }
}

//AnumalVar변수에 AnumalTmpl 클래스의 인스턴스 생성
const AnimalVar: Animal = new AnimalImpl('dog', true, '사료');

console.log(AnimalVar.name);
console.log(AnimalVar.tail);
console.log(AnimalVar.bark('wall'));

//제네릭타입
//TypeScript에서 코드를 작성할 떄 변수의 타입을 추상적으로 나타내어
//재사용성을 높이고 타입 안정성을 강화하는 기능 제공

//identity 함수는 제네릭타입 'T' 사용, 'T'는 타입 변수로 함수를 호출 할 때
//구체적인 타입으로 대체됨
//문자열 Hello를 인자로 할당, T는 string으로 대체됨
function identity<T>(arg: T): T {
    return arg;
}

//제네릭 함수를 호출할 떄 타입을 지정하지 않아도 됨,
let result: string = identity('Hello');
//제네릭 함수는 string 타입과 number타입을 인자로 받을 수 있음
let result1: number = identity(1004);
//bool타입 인자로 할당가능
let result2: Boolean = identity(true);
//null타입 할당가능
let result3: null = identity(null);
//undefined 할당가능
let result4: undefined = identity(undefined);

// 제네릭 클래스
// Box 클래스는 제네릭 타입 T를 사용함, 이 클래스는 어떤 타입의 값을 담을 수
// 있는 상자
class Box<T> {
    //Box클래스의 멤버변수 value는 제네릭 타입 T로 선언됨
    //멤버변수 value에는 어떤 타입이던 유연하게 들어올 수 있음
    value: T;

    constructor(value: T) {
        //생성자 함수에서 value를 매개변수를 입력받아 인스턴스 초기화
        this.value = value;
    }
}

//Box클래스의 타입이 제네릭 타입 T로 선언됐기 떄문에 <string> <number> 타입입력가능
//생성자에 전달된 값의 타입에 따라 value의 타입이 결정됩니다.
let boxOfString = new Box<string>('Hello');
let boxOfNumber = new Box<number>(42);

// 제네릭 인터페이스
// Pair 인터페이스는 두 개의 제네릭 타입 T U를 가짐 이는 두가지 다른 타입의 값을 가짐
interface Pair<T, U> {
    first: T;
    second: U;
}
//Pair interface에서 정의한 T와 U를 따라 string,number 타입을 순서대로 받음
let pairOfStringAndNumber: Pair<string, number> = { first: 'one', second: 1 };

//제네릭 타입은 클래스나 인터페이스에서 타입을 동적으로 지정가능 => 다양한 타입에서 재사용 가능, 유연한 코드 작성가능

//type 키워드로 타입에 별칭을 지어 변수에 타입 지정 가능
type MyString = string;
type MyNumber = number;

let str1: MyString = 'Hello';
let num2: MyNumber = 42;

//유니온 타입 : type키워드에 들어올 수 있는 타입여러개 지정
type StringOrNumber = string | number | null;
let value: StringOrNumber = 'text';
let value2: StringOrNumber = 123;
let value3: StringOrNumber = null;
//undefined는 StringOrNumber 타입에 선언되지 않은 타입이기 떄문에 오류발생
//let value4: StringOrNumber = undefined;

//enum (열거형) TypeScript에서 여러개의 연관된 상수들을 정의할 떄 사용되는 특별한 데이터타입
//각각의 상수에는 숫자 또는 문자열의 값이 할당됨, 여러 개의 상수를 그룹화하고 이름을 붙힘

//쉽게말해 const로 변수 여러개를 한꺼번에 선언한거라고 보면됨
//열거형 선언
enum Color {
    //특별한 값을 지정하지 않으면 0부터 차례대로 할당
    //Red = 0
    Red,
    //Green = 1
    Green,
    //Blue = 2
    Blue,
}

//myColor 변수에 열거형 타입인 Color 타입 지정
//myColor 변수에는 Red,Green,Blue 세가지 값만 들어올 수 있음
let myColor: Color = Color.Red;

//0
console.log(myColor);

enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

let myDirection: Direction = Direction.Up;

//UP
console.log(myDirection);
//enum을 콘솔로 찍으면 객체형태로 반환됨
//{ Up: 'UP', Down: 'DOWN', Left: 'LEFT', Right: 'RIGHT' }
console.log(Direction);
console.log(myDirection[0]);

type consttypes = string | undefined;
const str123: consttypes = '123';
