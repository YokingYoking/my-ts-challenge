type IsNever<T> = [T] extends [never] ? true : false

// 这题比较简单，有一点，never不等于never本身，主要是这个包在数组里的操作在permutation用到过