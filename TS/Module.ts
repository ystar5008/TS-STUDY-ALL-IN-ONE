//기본적으로 새로운 타입스크립트 파일에서 코드를 입력하면 코드가 전역 네임스페이스에 있음
//ts.ts에 선언한 foo를 참조
//변수를 전역으로 사용하게 되면 변수를 덮어쓰거나 충돌 가능성 존재

import { foo } from './ts';
import { 짱구 } from './test';
import { 짱구이름 } from './foo';
//var bar = foo; // allowed
const 짱짱구: string = 짱구;
//console.log(bar);
console.log(짱짱구);
console.log(짱구이름);
