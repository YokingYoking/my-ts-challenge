type FlattenDepth<
  T extends any[],
  S extends number = 1,
  U extends any[] = []
> = U['length'] extends S
  ? T
  : T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...FlattenDepth<F, S, [...U, 1]>, ...FlattenDepth<R, S, U>]
    : [F, ...FlattenDepth<R, S, U>]
  : T

  // 本题与之前的flatten类似，但是多加了一个层数限制，基本思路还是和flatten一致
  // 主要是层数问题，因为ts无法直接获取数字，但可以通过数组长度获取一个具体数字，
  // 所以这里通过多设一个空数组来记录层数，每flatten一层就给数组push个1，每次递归前检查数组长度
  // 该数组长度就是已flatten的层数，若已为1则直接返回T自身