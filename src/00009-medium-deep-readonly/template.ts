type DeepReadonly<T> = {
    readonly [key in keyof T] : keyof T[key] extends never ? T[key] : DeepReadonly<T[key]>
}

// 题目大意简明，一眼递归
// 唯一的难点在于怎么判断值是不是一个对象，这里采用的方法是
// 取出T[key]的key集合来判断是不是为空，不为空说明就是一个对象