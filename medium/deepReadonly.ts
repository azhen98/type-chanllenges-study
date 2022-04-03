type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}
// type DeepReadonly<T> = {
//   readonly [K in keyof T]: T[K] extends Record<string, unknown>
//     ? DeepReadonly<T[K]>
//     : T[K]
// }

export {}

const obj: Todo = {
  x: {
    a: 1,
    b: 'hi'
  },
  y: 'hey'
}

// obj.x.b = 23424
