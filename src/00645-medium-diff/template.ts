type Diff<O, O1> = {
  [Key in keyof O | keyof O1 as Key extends keyof O
    ? Key extends keyof O1
      ? never
      : Key
    : Key extends keyof O1
    ? Key
    : never]: Key extends keyof O
    ? Key extends keyof O1
      ? never
      : O[Key]
    : Key extends keyof O1
    ? O1[Key]
    : never;
};

// 本题思路主要是返回出两个对象之间有差异的字段，思路也比较简单，key并在一个集合，逐个遍历检查即可
// 从case可以看出这里O和O1的先后是没区别的，因此判断条件要写细一些
// 其次除了返回值的判断，还要记得给key也要判断一下，否则依然会返回出来共有的字段
