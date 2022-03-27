type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

type Includes<T extends any[], U> = U extends T[number] ? true : false
