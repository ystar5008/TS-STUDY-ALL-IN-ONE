function a(param: string | null | undefined) {
  /*
        ! null이 아님을 주장하는 연산자, undefined도 아님을 주장
    */
  if (typeof param !== "string") {
    param = JSON.stringify(param);
  }
  console.log(param);
  return param!.slice(3);
}

try {
  console.log(a("555555"));
  console.log(a(null));
  console.log(a(undefined));
} catch (e) {
  const error = e as Error;
  console.log(error.message);
}
