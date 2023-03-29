type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends '' ? S : S extends `${infer First}${From}${infer Rest}` ? `${First}${To}${Rest}` : S

// 思路比较简单，匹配一下From然后返回成To就行
// 这样的话case3会报错，那就再加一个对From为空字符串的判断
