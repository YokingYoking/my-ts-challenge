type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
}
// 题目要求：就是要给提供的类型所有的字段都加上readonly（readonly本来就是ts的一个关键字）
// 思路与04类似，遍历循环加readonly即可