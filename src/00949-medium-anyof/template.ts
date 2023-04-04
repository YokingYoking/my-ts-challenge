type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? First extends 0 | false | "" | [] | undefined | null
    ? AnyOf<Rest>
    : keyof First extends never
    ? AnyOf<Rest>
    : true
  : false;

  // 题目大意，检查泛型是否有具体值（具体看case可以看得出来）
  // 思路比较简单，遍历判断是否是这些值，因为这些无意义值是有限的，直接列出来即可
  // 唯一需要注意的是，空对象不能直接判断，而要通过key集合是否为空来判断