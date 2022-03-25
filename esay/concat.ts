// https://github.com/type-challenges/type-challenges/blob/master/questions/533-easy-concat/README.zh-CN.md

type Result = Concat<[1], [2]> // expected to be [1, 2]

// 在一开始就限制传入类型为 any[] 在后面直接将这个数组类型展开
type Concat<T extends any[], P extends any[]> = [...T, ...P]
