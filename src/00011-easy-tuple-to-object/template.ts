type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P
}

// 题目要求：把一个数组变成以那个值为键值对的对象（key和value都是同一个）
// 关键点在于如何在ts中遍历数组 -> T[number] 直接记忆即可 没有什么特别，单纯是一个语法