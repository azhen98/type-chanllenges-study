type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'

type Trim<T extends string> = T extends `${' ' | '\n' | '\t'}${infer k}${
  | ' '
  | '\n'
  | '\t'}`
  ? Trim<k>
  : T
