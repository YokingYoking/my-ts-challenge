type FlipArguments<T extends Function> = T extends (
  ...args: [...infer A]
) => infer R
  ? (...args: Reverse<A>) => R
  : never;

  // 题目大意简明，把函数参数的类型做调换，恰好可以用到前一题写的reverse，不再赘述