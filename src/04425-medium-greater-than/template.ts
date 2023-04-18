type Number2Array<
  T extends number,
  U extends any[] = []
> = U["length"] extends T ? U : Number2Array<T, [...U, 1]>;

type GreaterThan<T extends number, U extends number> = Number2Array<U> extends [
  ...Number2Array<T>,
  ...any
]
  ? false
  : true;

// 本题也是比较典型的数字处理问题，依然可以通过转换成数组，利用数组长度来做
// 为了方便处理另外写一个函数来把数字转换成全为1的数组
// extends本来只能比较是否相等，要比较数组长度的大小，其实就是比较大的数组展开还有any元素
// 所以T大于U时，就是判断T是否extends一个U和any元素展开拼在一起的数组
// 按上面这个思路写会发现相等时也返回了true，因此把逻辑反过来，就可以把相等的情况返回出来false
// 即判断U是否extendsT和any元素拼在一起的数组，是则返回false
// 这里基本处理完，但最后一个大数仍报错实例化过深，看了一下大家的参考答案基本都存在这个问题
// 之后再回来考虑怎么解决