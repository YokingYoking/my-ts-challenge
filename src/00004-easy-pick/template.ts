type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// 题目要求：K从T中pick出字段
// 解题思路：类似于写一个遍历函数，遍历T，（每个字段属性为P）if判断是否是K的
// 同时需要约束K中的字段都在T的范围内(extends keyof)