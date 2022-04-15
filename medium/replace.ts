type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'

type Replace<S, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${Right}`
  : never

export {}
