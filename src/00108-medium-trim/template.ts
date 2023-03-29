type Trim<S extends string> = S extends `${" " | "\n" | "\t"}${infer Rest}`
  ? Trim<Rest>
  : S extends `${infer Rest}${" " | "\n" | "\t"}`
  ? Trim<Rest>
  : S;

// 题意就是上一题只对左侧空格trim的扩展，那最简单的思路就是检查完左侧的空格后继续检查右边的空格
// 再加多一个判断即可

// 也有思路一样但更容易读懂的写法:
// extends后面跟的条件可以用或并列起来：
// ${" " | "\n" | "\t"}${infer Rest} | ${" " | "\n" | "\t"}${infer Rest} | ${" " | "\n" | "\t"}${infer Rest}${" " | "\n" | "\t"}