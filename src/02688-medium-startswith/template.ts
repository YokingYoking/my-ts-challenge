type StartsWith<T extends string, U extends string> = T extends `${U}${infer Rest}` ? true : false

// 本题大意明确，思路简单，不赘述