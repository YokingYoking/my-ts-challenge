type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer X) => any ? X : never

// 题目大意比较简明，取得函数args的类型值
// 虽然已做泛型限制，但为了把args类型infer为一个变量值还是需要extends三元表达式来获取
// 实际上never也是走不到的