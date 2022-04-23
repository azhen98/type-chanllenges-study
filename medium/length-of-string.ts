type A = 'sdfsdfsdf'

// type B<T extends string> = T['length'] extends number ? infer T['length']:never

// const string = String('asfsfsd').length as const

export {}

type StringLength<
  T extends string,
  R extends string[] = []
> = T extends `${infer First}${infer Rest}`
  ? StringLength<Rest, [...R, First]>
  : R['length']

type C = StringLength<A>
