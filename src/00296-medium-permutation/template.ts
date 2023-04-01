type Permutation<T> = T extends never ? [] : never

// 题目大意，给一个union，返回所有排序可能的数组