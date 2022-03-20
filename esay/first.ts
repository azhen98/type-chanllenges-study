type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

// 这里面的 infer F 代表需要推断的 T 里面的第一个元素类型, 如果 T 符合 [infer F, ...any] 这个类型的数组, 就会返回第一个元素 F,
// 基本上在泛型传递的时候(T extends any[])就已经规定了传入的类型会符合 [infer F, ...any], 这里只是把它取出来
type First<T extends any[]> = T extends [infer F, ...any] ? F : never

// 这个里面是如果符合条件则返回第一个元素类型, 不然将自身返回
type FirstT<T> = T extends any[] ? T[0] : T
type head5 = FirstT<arr1>
type head6 = FirstT<number>

// 拓展 取出来第二个元素的类型
type Second<T> = T extends [infer S, infer F, ...any] ? F : never
type head3 = Second<arr1> // expected to be "b"
// 这个里面传入一个strign 不符合后面的 T extends [infer S, infer F, ...any] 所以直接返回 never
type head4 = Second<string> // expected to be never
// 参考 https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%BB%8B%E7%BB%8D
