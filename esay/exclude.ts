// 这个类型集合本质就是从"类型集合"里面提取出来差集

// 从T中提取出比U多的类型 (这种 'a' | 'b' | 'c' 类型好像不能出现 'a' | 'b' | 'c'| number) number类型有很多符合本类型的值,如:1,2,3....,
// "c" 则只会有一个符合本类型的值 就是 "c"
type MyExclude<T, U> = T extends U ? never : T

// 实现 //  'a' | 'b' includes("a") 'a' | 'b' includes("b") 多次判断,
type T1 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>
// 内置
type T2 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>

type a = '1' | '2' | '4'
type b = '2' | '3'
type T3 = MyExclude<a, b>

// ts 文档 https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers

// Extract
// k扩展

type MyExtract<T, U> = T extends U ? T : never

type T4 = MyExtract<'a' | 'b' | 'c' | 'd', 'a' | 'b'>
type T5 = MyExtract<string | number, string | boolean | number>

type T6 = MyExtract<'a' | 'b' | 'c' | string, 'a' | 'b'> // 这里就是错误的使用在 这种类型集合里面不应该出现 string 和顶部的解释符合

export {}
