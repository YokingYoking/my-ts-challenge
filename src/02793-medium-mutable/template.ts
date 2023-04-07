type Mutable<T extends object> = {
    - readonly[Key in keyof T]: T[Key] extends Object ? Mutable<T[Key]> : T[Key]
}

// 本题大意也好理解，重要的还是语法点，要去除readonly在前面加个减号就行

// 还有类型限制这里object要写小写不能写大写