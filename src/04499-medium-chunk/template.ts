type Chunk<
  T extends any[],
  N extends number,
  Temp extends any[] = []
> = T extends [infer First, ...infer Rest]
  ? Temp["length"] extends N
    ? [Temp, ...Chunk<T, N>]
    : Chunk<Rest, N, [...Temp, First]>
  : Temp extends []
  ? []
  : [Temp];

  // 本题大意主要是复现lodash库中的chunk，具体功能就是把一整个数组按给定的长度切分
  // 具体思路依然是递归遍历，需要一个临时变量来保存提取出来的元素，然后对比该数组长度是否已达到要求
  // 若未达到则对剩余部分继续遍历，并把当前元素压入临时数组
  // 若已达到则返回这个临时数组，并展开递归，同时不传入临时数组变量即相当于清空它
  // 这里有一点比较难以理解的是在达到数组长度之后，继续向后遍历传入的是整个原本的T数组而不是Rest，程序才正确
  // 