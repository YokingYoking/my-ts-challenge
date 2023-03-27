type MyReturnType<T> = T extends (...args: any) => infer X ? X : never

// 题意比较简明，获取泛型T函数的返回值的类型
// 借鉴parameters，把返回值类型infer为X然后返回
// 最后两个case主要是函数带了参数，这里加上即可