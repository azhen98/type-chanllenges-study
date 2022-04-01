interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly3<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.description = 'barFoo' // Error: cannot reassign a readonly property
todo.completed = true // OK

type MyReadonly2<T, P extends keyof T> = Omit<T, P> & Readonly<Pick<T, P>>

type MyReadonly3<T, P extends keyof T> = {
  [K in keyof T as K extends P ? never : K]: T[K]
} & {
  readonly [K in P]: T[K]
}

export {}
