type MyExclude<T, U> = T extends U ? never : T

// 题目要求是exclude，输出从T中剔除U的元素，反过来想就是逐个检查T的元素是否在U中，
// 在的话就输出空（never），不在的话就输出该元素本身
// 思路不难解决，但问题是怎么通过具体语法实现
// 再具体来讲就是unionA extends unionB的具体表现是什么？-> 就是逐个项遍历进行对比
// never就是空集