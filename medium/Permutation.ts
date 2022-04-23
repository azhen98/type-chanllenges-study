type perm = Permutation<'A' | 'B' | 'C'> // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : []
export {}

// 声明一个额外的泛型 E 来标识循环的元素
type AppendDot<U, E = U> = E extends U ? `${E & string}.` : never
type AppendDot1<U, E = U> = U extends [never]
  ? []
  : U extends E
  ? [...AppendDot1<Exclude<E, U>>]
  : []
// 使用 Union 来映射
type R1 = AppendDot<'a' | 'b'> // => "a." | "b."
type R2 = AppendDot1<'a' | 'b'> // => "a." | "b."

type A = 'A' | 'B' | 'C'

// 这里应该是一个 3*3

// T 是 按照顺序 ‘A’ ‘B’ ‘C’
//  E 是 ‘A’ ‘B’ ‘C’
//  每一次都是一个单独的元素来判断
//  示例 ['A','A'] ['B','A'] ['C','A'] A.
//  示例 ['B','B'] ['B','B'] ['C','B'] B.
//  示例 ['C','C'] ['B','C'] ['C','C'] C.

type B<T, E = T> = E extends T ? `${E & string}.` : never

type C = B<A>
