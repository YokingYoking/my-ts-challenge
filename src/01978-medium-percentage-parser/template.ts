type CheckSymbol<S extends string> = S extends "+" | "-" ? true : false

type CheckPercentage<S extends string> = S extends ""
  ? ["", ""]
  : S extends `${infer Else}%`
  ? [Else, "%"]
  : [S, ""];

type PercentageParser<A extends string> =
  A extends `${infer First}${infer Rest}`
    ? CheckSymbol<First> extends true
      ? [First, ...CheckPercentage<Rest>]
      : ["", ...CheckPercentage<A>]
    : ["", "", ""];

// 本题大意简明：匹配固定格式的字符串并返回一个三个元素的数组，具体看case
// 思路也比较简单，为了方便编写主函数，另外写两个工具函数分别拿来判断第一个字符是否为加号或减号
// 一个拿来判断最后一个字符是否匹配百分号，然后主函数按照case要求写即可
