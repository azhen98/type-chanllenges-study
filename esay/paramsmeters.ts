type MyParameters<T> = T extends (...arg: infer ARG) => any ? ARG : never

type func = (name: string, age: number) => void

type b = MyParameters<func>
