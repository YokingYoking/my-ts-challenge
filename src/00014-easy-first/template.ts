type First<T extends any[]> = T extends [] ? never : T[0] 

// 题目要求就是取数组第一个，提供的参数都是写死的字面类型，所以类似js取[0]即可
// 唯一注意的就是空数组要返回一个never所以要写三元表达式判断一下

// 注：此题有多解，运用不同知识点

// 原解：extends 类型条件判断

// 获取tuple的length属性(===0)从而判断是一个空数组 T['length'] extends 0 ? never : T[0]

// extends union 判断的规则, 类似于第一种，遍历整个数组判断是否存在第一项
// 当时空数组的时候，T[0]获取的undefined不会在遍历的T空数组元素中: T[0] extends T[number] ? T[0] : never

// inter的使用(推断) 类比于js中的解构赋值 T extends [inter First, ... inter Rest] ? First : never