export {}
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

type Flatten<T extends any[]> = T extends [infer A, ...infer B]
  ? A extends any[]
    ? [...Flatten<A>, ...Flatten<B>]
    : [A, ...Flatten<B>]
  : []
