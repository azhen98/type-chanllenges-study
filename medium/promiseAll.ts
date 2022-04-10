declare function PromiseAll<T extends any[]>(
  value: readonly [...T]
): Promise<{ [P in keyof T]: T[P] extends Promise<infer E> ? E : T[P] }>
const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll1([promise1, promise2, promise3] as const)

declare function PromiseAll1<T extends any[]>(
  values: readonly [...T]
): Promise<{ [V in T[number]]: V extends Promise<infer E> ? E : V }>

type a = ['1', 2, 3, 4]

type c<T extends any[]> = {
  [K in T[number]]: K
}

type d = c<a>
