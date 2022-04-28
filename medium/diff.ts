export {}

type Foo = {
  a: string
  b: number
  d: string
}
type Bar = {
  a: string
  c: boolean
}

type Result1 = Diff<Foo, Bar> // { b: number, c: boolean }
type Result2 = Diff<Bar, Foo> // { b: number, c: boolean }

// type Diff<A extends object, B extends object> = {
//   [K in keyof A]: K extends keyof B ? never : A[K]
// }

type Diff<A extends object, B extends object> = {
  [K in
    | Exclude<keyof A, keyof B>
    | Exclude<keyof B, keyof A>]: K extends keyof A
    ? A[K]
    : K extends keyof B
    ? B[K]
    : never
}

type Same<A extends object, B extends object> = {
  [K in Extract<keyof A, keyof B>]: A[K]
}

type Result3 = Same<Bar, Foo> // { b: number, c: boolean }

type C = Exclude<keyof Foo, keyof Bar>
