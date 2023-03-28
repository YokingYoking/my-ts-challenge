type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer Rest}`
  ? TrimLeft<Rest>
  : S;

  // 题目大意：去掉字符串左侧的空格
  // 上手没什么好思路，不了解ts对字符的检查机制，看着答案来慢慢理解
 //  也是使用模板字符串去匹配，按照测试用例分别匹配空格和\n和\t，剩余部分infer为一个变量
 //  之后递归一个个查即可  