interface Todo {
  title: string
  description: string
  completed: boolean
}

type myPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type TodoPreview = myPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}

export {}
