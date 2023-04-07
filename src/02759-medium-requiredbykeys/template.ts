type RequiredByKeys<T, K extends keyof T = keyof T> = IntersectionToObj<Required<{
    [Key in keyof T as Key extends K ? Key : never]: T[Key]
}> & {
    [Key in Exclude<keyof T,K>]?: T[Key]
}>
// 与上题思路基本一致，只是逻辑相反
// 唯一需要注意的是直接遍历返回出来还会是partial的，需要用ts的工具类Required来加上必须的限制