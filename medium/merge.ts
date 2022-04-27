type foo = {
  name: string
  age: string
}

type coo = {
  age: number
  sex: string
}

type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}

type Merge<
  T extends Record<string, unknown>,
  B extends Record<string, unknown>
> = {
  [K in keyof (T & B)]: K extends keyof T
    ? T[K]
    : K extends keyof B
    ? B[K]
    : never
}

export {}
