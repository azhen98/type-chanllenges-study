type Test = '123'
type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"

export {}

// type StringToUnion<
//   T extends string,
//   A extends string[] = []
// > = T extends `${infer F}${infer R}` ? StringToUnion<R, [...A, F]> : A

type StringToUnion<T extends string> = T extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : never
