type Shift<T extends any[]> = T extends [infer First, ... infer Rest] ? [...Rest] : []

// 这题在前面做过类似的，不知为何再次重复