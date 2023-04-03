type Flatten<T extends any[]> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends any[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : [];

  // 思路就是把嵌套数组还原成一维的数组，首先依然是递归遍历的思路
  // 先解决了本就是一维数组返回出来是正确的结果，这里要注意压栈的顺序
  // 之后再考虑如何解嵌套
  // 因此在First不是数组的时候，直接把First压入栈，对Rest的部分继续调用Flatten并加上解构展开，就达成了遍历的效果
  // 根据这个考虑回First是数组的情况的话，直接把First也再代入Flatten递归调用即可