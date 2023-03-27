type TupleToUnion<T> = T extends Array<infer X> ? X : never

// 题意简明，把数组里的类型都返回出来转换成集合、
// 第一时间是想到遍历数组返回值，但一下子没写出来，后面想起来可以参考includes那里去实现：
// T extends [infer First, ...infer Rest] ? First | TupleToUnion<T> : never
// 类似的联想到获取函数输出的题目，所以就仿照写出答案
// 除此以外还有更简单的实现方式，就是最普通的数组遍历T[number]，也有一样的效果