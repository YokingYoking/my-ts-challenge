type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer X) => infer T ? (...args: [...X, A]) => T : never

// 思路也比较简单 对比parameters那题、
// 解构把参数展开并设X，返回的时候返回一个加上A的数组即可