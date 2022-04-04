type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

type TupleToUnion<T extends any[]> = T[number]

type TupleToUnion1<T extends any[]> = T extends Array<infer K> ? K : never

export {}

// https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%B8%80%E4%BA%9B%E7%94%A8%E4%BE%8B
// https://stackoverflow.com/questions/44480644/string-union-to-string-array/45486495#45486495
