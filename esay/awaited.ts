// 题目 https://github.com/type-challenges/type-challenges/blob/master/questions/189-easy-awaited/README.zh-CN.md

// 第一层判断 Promise 内的类型是什么
// 第二层判断 P 是不是 一个promise, 如果是就推断这个 promise(第二个) 里面的类型 如果不是直接返回第一个promise的类型
type MyAwaited<T> = T extends Promise<infer P>
  ? P extends Promise<infer U>
    ? U
    : P
  : never

type c = MyAwaited<Promise<Promise<string>>> //expected string
type d = MyAwaited<Promise<number>> //expected number

export {}
