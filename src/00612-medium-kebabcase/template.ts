type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Uncapitalize<First>}${KebabCase<Rest>}`
    : `${Uncapitalize<First>}-${KebabCase<Rest>}`
  : "";

// 题目大意，实现驼峰转换，主要是需要一个前置知识：Uncapitalize工具类来将首字母变成小写
// 因为第一个字母无论大小写都不会再加连接符，所以第一个无脑转换成小写就行，然后再遍历
// 因此直接对Rest进行首字母小写转换后判断是否跟原来的字符串一致，若一致则说明Rest首字母也就是第二个字母本来就是小写，否则加连接符
// 然后继续递归调用即可

// 实际上，第一思路肯定是遍历检查字母是否大小写，但是没有这样可以直接用的工具类型，其实可以考虑自己写一个:
// 原理也是类似的 转换成大写检查跟原来是否一致

// type IsUpperCase<T extends string> = Uppercase<T> extends T
//   ? Lowercase<T> extends T
//     ? false
//     : true
//   : false

// type KebabCase<S> = S extends `${infer U}${infer V}${infer Rest}`
//   ? true extends IsUpperCase<V>
//     ? `${Lowercase<U>}-${KebabCase<`${Lowercase<V>}${Rest}`>}`
//     : `${Lowercase<U>}${KebabCase<`${V}${Rest}`>}`
//   : S