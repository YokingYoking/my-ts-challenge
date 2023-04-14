type IsEmptyArray<T extends any[]> = T["length"] extends 0 ? true : false;

type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${IsEmptyArray<E> extends true
  ? ""
  : `__${E[number]}`}${IsEmptyArray<M> extends true ? "" : `--${M[number]}`}`;

  // 本题大意简明，把三个参数返回出来一个BEM风格的class名
  // [number]遍历数组，返回模板字符串即可
  // 只需要注意一下如果输入是空数组则要判断一下