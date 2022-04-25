type Test = -100
type Result = Absolute<Test> // expected to be "100"

export {}

type Absolute<T extends number> = `${T}` extends `-${infer N}` ? N : T
