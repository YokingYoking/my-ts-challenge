type Pop<T extends any[]> = T["length"] extends 0
  ? T
  : T extends [...infer Rest, infer Last]
  ? [...Rest]
  : never;
 
// 跟last实现基本一样，只不过返回出来rest
// 不过还要考虑空数组的情况也就是case3，所以多加一个长度判断