/**
 * 이터레이터는 객체지향언어에서 동작함
 * 일반적으로 다음 인터페이스를 구현하는 객체
 */

/**
 * 이터레이터(iterator) 프로토콜은 객체가 반복 가능하도록 하는 규약,
 * for...of 루프에서 사용
 */
interface Iterator<T> {
    //next 메소드는 이터레이터에서 다음 값을 반환하는 역할
    //value 매개변수는 다음 값으로 전달될 수 있음
    //반환 값은 IteratorResult 타입
    next(value?: any): IteratorResult<T>;
    //return 메소드는 이터레이터를 종료할 때 호출 될수 있는 선택적인 메소드
    //이터레이터를 종료하고 최종결과를 반환함
    //value 매개변수는 종료 값을 전달 할 수 있음
    //반환 값은 IteratorResult 타입
    return?(value?: any): IteratorResult<T>;
    //throw 메소드는 이터레이터에서 예외를 던질 떄 호출 될 수 있는 선택적 메소드
    //반환값은 IteratorResult 타입
    throw?(e?: any): IteratorResult<T>;
}

class Component {
    constructor(public name: string) {}
}

class Frame implements Iterator<Component> {
    private pointer = 0;

    constructor(public name: string, public components: Component[]) {}

    public next(): IteratorResult<Component> {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++],
            };
        } else {
            return {
                done: true,
                value: null,
            };
        }
    }
}

let frame = new Frame('Door', [
    new Component('top'),
    new Component('bottom'),
    new Component('left'),
    new Component('right'),
]);
let iteratorResult1 = frame.next(); //{ done: false, value: Component { name: 'top' } }
let iteratorResult2 = frame.next(); //{ done: false, value: Component { name: 'bottom' } }
let iteratorResult3 = frame.next(); //{ done: false, value: Component { name: 'left' } }
let iteratorResult4 = frame.next(); //{ done: false, value: Component { name: 'right' } }
let iteratorResult5 = frame.next(); //{ done: true, value: null }

//It is possible to access the value of iterator result via the value property:
let component = iteratorResult1.value; //Component { name: 'top' }

//선언
//타입스크립트에는 두가지 선언 공간이 존재함
//변수 선언 공간과 타입선언 공간 존재

class Foo {}
interface Bar {}
type Bas = {};

export var foo: Foo;
var bar: Bar;
var bas: Bas;

/**
 * Bar는 변수 선언 공간에 기여하지 않음
 */
interface Bar {}
//bar 변수에 Bar interface를 할당할 수 없음, 변수로 선언 되지 않음
var bar = Bar; // ERROR: "cannot find name 'Bar'"

class Foo2 {}
//클래스는 변수에 할당 가능
var someVar = Foo2;
var someOtherVar = 123;
var 변수: someOtherVar;
//typeof는 가능
var 변수: typeof someOtherVar;
