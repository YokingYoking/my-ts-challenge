type ReplaceAll<S extends string, From extends string, To extends string> = From extends ""
? S
: S extends `${infer First}${From}${infer Rest}`
? `${First}${To}${ReplaceAll<`${Rest}`, From, To>}`
: S;

// 与replace类似，但要匹配多个字符串，因此多加一个递归循环即可
// 后面递归参数为剩余未匹配的部分Rest，其他的直接拼接上去