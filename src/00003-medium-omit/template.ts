type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never: P]: T[P]
}

// 题目大意简明，把K泛型中的关键字从T中去掉然后返回对象
// 跟pick的功能刚好反过来，因此也可以借鉴，就是需要循环T的key判断一下是否在K中，若是就返回never
// 按照这个思路写下来之后发现报“P具有循环约束”的错误，看了一下参考答案发现需要再加一个as P, 相当于加个断言确定P的约束
// 上面这点不太好理解，之后有新的理解再补充