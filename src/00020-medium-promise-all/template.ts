declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: Awaited<T[K]> }>;


// 题目大意：返回一个Promise类型，泛型为输入的values参数

// 由case4可知，需要对Promise解嵌套，因此此处需要用到官方的Awaited工具类型
// 之前也有题目是自己实现过的版本，但可能写的仍不周全，无法正常使用

// ts自带的Awaited类型（https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html）
// 官方介绍如下：specifically, the way that they recursively unwrap Promises

// 先从泛型开始看，T需要是数组类型，然后参数value应该也是T类型，但仔细观察用例并结合报错来看，泛型还有可能是类型字面量
// 所以参数这里应该要给T所有字段都加上readonly
// 再往下，返回应为一个Promise类型值，观察用例，里面的值含Promise的是返回一个类型，其他则是直接返回字面量
// 所以这里应该是需要解包Promise，如上文所述使用Awaited
// 这里也是需要循环数组输出，而数组本身也可以看做index为数字的对象，因此直接用对象的循环方式来输出即可
