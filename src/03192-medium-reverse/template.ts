type Reverse<T extends any[]> = T extends [infer First, ... infer Rest] ? [...Reverse<Rest>, First] : []

// 本题大意简明，把数组里的元素顺序反过来即可
// 前面也做过类似的题，遍历加递归即可解决