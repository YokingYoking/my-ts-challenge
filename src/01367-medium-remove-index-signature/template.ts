type RemoveIndexSignature<T> = {
  [Key in keyof T as string extends Key
    ? never
    : number extends Key
    ? never
    : symbol extends Key
    ? never
    : Key]: T[Key];
};

// 本题大意不算特别清楚，但是从case上看并不太难，主要就是检查这个对象的每个Key是不是string/number/symbol类型
// 如果是就把它去掉返回其他的（主要像0，‘foo’这些都是字面量），根据题目介绍，这些类型的key-value叫做index signature
// 实现思路也比较简单，遍历Key并逐个断言为string/number/symbol类型，如果是，就返回never
