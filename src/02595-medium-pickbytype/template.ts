type PickByType<T, U> = {
  [Key in keyof T as T[Key] extends U ? Key : never]: T[Key];
};

// 本题大意简单，根据实际type挑出所需要的字段
// 思路也简单，遍历type对象，用as断言来判断是否为U类型，若是则正常输出否则输出never