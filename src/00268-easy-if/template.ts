type If<C extends boolean, T, F> = C extends true ? T : F


// 题目大意：第一个是条件，true就返回T，false就返回F
// 这题比较简单，首先限制条件是个布尔值，然后三元表达式输出即可
// 补充一些知识点：详见测试用例注释
