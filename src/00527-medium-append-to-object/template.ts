type AppendToObject<T extends Object, U extends string | number | symbol, V> = {
  [Key in (keyof T | U)]: Key extends U
    ? V
    : Key extends keyof T
    ? T[Key]
    : never;
};

// 题目大意，给type加字段，思路比较简单，先把原本的type遍历返回出来，再加上新的字段
// 主要还是实现过程中一些ts的语法问题，首先是&运算符并不能真正的把两个对象合成成一个，还是要老老实实遍历
// 其次是两个key的合并用的是|运算符，剩下的都比较好理解