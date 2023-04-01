type LengthOfString<
  S extends string,
  Arr extends string[] = []
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...Arr, First]>
  : Arr["length"];


  // 题目大意要返回字符串的长度，但是ts中只可以直接返回数组长度而不能直接返回字符串长度
  // 因此思路也比较简单，把字符串逐个转换成数组即可
  // 与之前的题目类似，设置变量，递归遍历压入一个数组中，最后返回length属性即可