type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean>
// 期望是 (a: number, b: string, x: boolean) => number

export {}

type AppendArgument<F extends Function, T> = F extends (
  ...Rest: infer R
) => infer Q
  ? (...args: [...R, T]) => Q
  : never
