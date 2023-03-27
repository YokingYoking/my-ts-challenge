type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K as P]: T[P]
} & {
    [P in keyof T as P extends K ? never : P]: T[P]
}

// 题目大意简明，给K中的字段加readonly，如果没有参数则给所有字段都加，相当于7中的readonly
// 这里主要是涉及到两个新知识点
// 1. 两个对象的组合用 & ， 本来的思路是通过判断从而加readonly，但是readonly加在字段最前面
// 没有办法用常规的遍历判断思路去做，只好绕个弯，直接分成两个对象，其中一个直接遍历K来加上readonly，另一个需要判断不在K中，
// 将其他字段原原本本返回出来
// 2. 默认值，这里主要是因为case1，K这个泛型是可以不存在的，所以需要给一个默认参数，
// 又由于给出的用例是没有K时为所有字段加readonly，所以K的默认值就是keyof T