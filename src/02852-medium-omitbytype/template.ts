type OmitByType<T, U> = {
    [Key in keyof T as T[Key] extends U ? never : Key]: T[Key]
}

// 思路简单，与之前pickbytype基本一样，不赘述