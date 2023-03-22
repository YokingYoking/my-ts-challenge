type Length<T extends readonly any[]> = T['length']

// 这题比较简单，主要是注意T的约束 同时补充搞明白tuple
// A tuple type is another sort of Array type that knows exactly how many elements it contains,
// and exactly which types it contains at specific positions.
// tuple就是一个定死类型并且定长的数组，对普通array取length是一个never