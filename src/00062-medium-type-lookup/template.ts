type LookUp<U, T extends string> = U extends {type: T} ? U : never

// 题目大意，T是U的type参数，通过填入不同的T返回对应的U
// 思路是遍历U的所有interface，看它的type是否为T，是就返回出来
// 从exclude那题可知，集合的遍历不用另外写，直接判断U即可
// 这里一开始写成了U['type'] extends T，但无法实现，反过来写一个type：T的对象即可