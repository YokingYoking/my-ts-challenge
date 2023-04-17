type Flip<T extends Record<string, string|boolean|number>> = {
    [Key in keyof T as `${T[Key]}`]: Key
}

// 本题大意简明，就是把key value值反过来
// 基本思路简单，遍历key返回出来把T[Key]作为key， Key作为value即可
// 但是会碰到类型报错，主要是case3，boolean不能作为key
// 因此要规定T的类型，用Record来规定，并且把number|string以外的值，如boolean都转换成字符串