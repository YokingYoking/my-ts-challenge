type DropChar<
  S extends string,
  C extends string
> = S extends `${infer Head}${C}${infer Tail}`
  ? DropChar<`${Head}${Tail}`, C>
  : S;

  // 本题大意明了，匹配比去掉某些指定字符
  // 与之前做过的替换类似，思路比较简单，用字符串匹配指定的字符
  // 然后不断循环递归