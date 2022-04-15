type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

type Capitalize<T extends string> = T extends `${infer R}${infer Rest}`
  ? `${Uppercase<R>}${Rest}`
  : ''

export {}
