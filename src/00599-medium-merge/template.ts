type Merge<F, S> = {
    [Key in keyof F | keyof S]: Key extends keyof S ? S[Key] : Key extends keyof F ? F[Key] : never
}

// 题目大意把两个type对象合并为一个，与append to object有点类似
// 同样是遍历两个对象的key然后分别判断并返回出来
// 需要注意的是从case中看出，如果有相同的key，后面一个对象会覆盖掉前面一个对象
// 因此判断的顺序应该事先判断是否存在与S在判断F
