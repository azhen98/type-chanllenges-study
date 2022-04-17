type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'

type ReplaceAll<
  T,
  From extends string,
  To extends string
> = T extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${ReplaceAll<Right, From, To>}`
  : T
// 和递归删除很像
