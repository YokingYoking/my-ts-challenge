type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

// 题目大意简明，拼接两个数组
// js的最简单实现方法
function myConcat(a: any[], b: any[]) {
    return [...a, ...b]
}
// 照葫芦画瓢即可, 此处语法通用