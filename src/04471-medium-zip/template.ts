type Zip<T extends any[], U extends any[]> = T extends [
  infer TFirst,
  ...infer TRest
]
  ? U extends [infer UFirst, ...infer URest]
    ? [[TFirst, UFirst], ...Zip<TRest, URest>]
    : []
  : [];

  // 本题大意是把两个数组压缩成一个，并且每个元素一一对应为内部的数组元素，其中一个数组为空就返回来空
  // 若有元素没对上，也返回空
  // 思路也比较清晰，分别设置T和U的变量，递归遍历即可