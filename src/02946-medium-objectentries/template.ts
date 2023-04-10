type ObjectEntries<T, U = Required<T>> = {
  [Key in keyof U]: [Key, U[Key] extends undefined ? undefined : U[Key]];
}[keyof U];

// 题目大意简明，把一个对象转化成[key, value]形式的数组联合类型
// 首先是如何把对象转成联合类型，通过{}[]的形式，给对象加一个下标key就可，在前面也有碰到过直接加[number]
// 其次根据用例，可知要处理可选参数，根据前面做过的required keys，可以通过Required工具类把T全部转成必须参数再返回
// 但是Required的转换有个地方需要注意：对于value是undefined的可选参数，会转换成never，因此还要具体处理
// 直接判断value是否undefined，如果是就手动返回出来一个undefined