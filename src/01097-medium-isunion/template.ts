type IsUnion<T, K = T> = [T] extends [never]
  ? false
  // : T extends T // 这里判断必是true
  : [K] extends [T]
    ? false
    : true
  // : false;

  // 题目大意好理解，判断是否联合类型
  // 关键点在于联合类型在条件判断的左侧出现会被自动拆解开