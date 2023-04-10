type TupleToNestedObject<T extends any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? {
      [Key in First as First extends string | number | symbol
        ? First
        : never]: TupleToNestedObject<Rest, U>;
    }
  : U;

// 本题大意简明，将一个数组里的全部key还原成对象，根据case可知用递归即可
// 顺着正常的遍历思路写，唯一碰到的问题是会报First不是number|string|symbol的错
// 这里多加了一个判断就通过