type IntersectionToObj<T> = {
    [K in keyof T]: T[K]
  }

type PartialByKeys<T, K extends keyof T = keyof T> = IntersectionToObj<{
    [Key in keyof T as Key extends K ? Key : never]?: T[Key]
} & {
    [Key in Exclude<keyof T,K>]: T[Key]
}>

// 本题大意简明，把需要的字段变为可选
// 参考readonly2编写，思路也比较简单，但需要注意一点：直接&两个对象是不能通过的
// readonly2直接&两个对象可以通过是因为用例用Alike去判断，Alike包含了把两个对象合并的功能
// 但是这里用Equal去判断就要自己手动把两个对象合并，如IntersectionToObj所示