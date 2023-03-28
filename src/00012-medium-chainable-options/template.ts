type Chainable<T = {}> = {
    option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<Omit<T,K> & Record<K,V>>;
    get(): T
  }

  // 这道题比较难，属于是比较无从下手，看了答案之后略有思路，大概是链式构造一个对象并返回出来
  // 从测试用例来看，先是初始化了一个变量，然后option设置键值对，get再返回出来这个变量
  // 类比到ts中，初始泛型需要设一个T为空对象，后续给他加键值对
  // 从case2，case3可知，还需要考虑不能添加进相同的key，所以在参数这里需要加一个判断，以抛出错误
  // 到了返回值这里，因为是可以链式调用所以肯定是返回一个Chainable类型，问题是里面的泛型怎么填
  // 先要了解一个新知识点：Record<Keys, Type>工具类型，返回一个键为Keys，值为Type这个类型的一个对象
  // 所以返回的Chainable中要把之前的T和新创建的Record拼在一起，用到&运算符
  // 到这里就大概完成题意，但case3仍报错，再观察case2和case3的区别，都是在1的基础上更换了一个同名key的类型值
  // 由此可以猜测，每次运算出错时，都会将这个出错的字段从原T对象中去掉，所以Chainable中与Record拼接的T还需要做一个Omit操作

  // 总结：这道题涉及到类似函数的实现，不太好用js类比，也是通过测试用例反推为主