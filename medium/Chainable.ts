declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 期望 result 的类型是：
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}

type Chainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<T & Record<K, V>>
  get(): T
}

// type b = {
//   name: {
//     age: string
//   }
// }

// type K = number | string

// type c = Record<K, b>

// const c: c = {
//   1: {
//     name: {
//       age: 4324
//     }
//   }
// }

export {}
