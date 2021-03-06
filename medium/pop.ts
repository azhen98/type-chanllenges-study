// https://github.com/type-challenges/type-challenges/blob/master/questions/16-medium-pop/README.zh-CN.md
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

type Pop<T extends any[]> = T extends [...infer K, infer P] ? K : never
export {}
