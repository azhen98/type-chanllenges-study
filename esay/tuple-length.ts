type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
]

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5

type Length<T extends readonly any[]> = T['length']

// 相关链接 https://juejin.cn/post/7000560464786620423
