//export 키워드로 변수나 type등을 쉽게 모듈화가능
//다른 파일이나 폴더에서 사용가능

// file `foo.ts`
let someVar = 123;
type SomeType = {
    foo: string;
};
export { someVar, SomeType };

//이름을 바꿔서 내보내기 가능
let 짱구 = '짱구';

export { 짱구 as 짱구이름 };

// file `bar.ts`
// import * as는 모듈의 이름에서 모든 것을 가져올 수 있음
// 단일 import를 사용하여 하나의 파일만 가져와야함
// 사이드이펙트 발생 가능성
import * as foo from './foo';
// you can use `foo.someVar` and `foo.SomeType` and anything else that foo might export.

/**
 * 기본내보내기
 */
// export declare default 짱132구 = '그냥 문자';
// export default function makeAdd(){};
// export default class User{}
