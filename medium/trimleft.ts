export {}

type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '

type TrimLeft<T extends String> = T extends `${' ' | '\n' | '\t'}${infer K}`
  ? TrimLeft<K>
  : T

// https://github.com/type-challenges/type-challenges/blob/master/questions/106-medium-trimleft/README.zh-CN.md
