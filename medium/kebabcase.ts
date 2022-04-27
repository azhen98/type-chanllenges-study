// FooBarBaz -> foo-bar-baz

type a = 'FooBarBaz'

type Kebabcase<T extends string> = T extends `${infer F}${infer N}`
  ? N extends Uncapitalize<N>
    ? `${Uncapitalize<F>}${Kebabcase<N>}`
    : `${Uncapitalize<F>}-${Kebabcase<N>}`
  : T

type c = Kebabcase<a>
type c1 = Uncapitalize<a>

type D<T extends string> = T extends `${infer F}${infer N}` ? N : never

type E = 'f'

type Y = D<E>

export {}
