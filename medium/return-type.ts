type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : never

const fn = (v: boolean) => {
  if (v) return 1
  else return 2
}

type c = MyReturnType<typeof fn>

export {}
