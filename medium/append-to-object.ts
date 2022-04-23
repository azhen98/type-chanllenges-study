type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

export {}

type AppendToObject<T extends Record<string, unknown>, K extends string, V> = {
  [index in keyof T | K]: index extends K ? V : T[index]
}
