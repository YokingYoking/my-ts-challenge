type OnlyGreater<A1 extends any[], A2 extends any[]> = A1 extends A2
  ? false
  : A1 extends [...A2, ...any]
  ? true
  : false;
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  Result extends any[] = [],
  CurrIndex extends any[] = []
> = T extends [infer First, ...infer Rest]
  ? CurrIndex extends [...Number2Array<Start>, ...any]
    ? OnlyGreater<Number2Array<End>, CurrIndex> extends true
      ? Fill<Rest, N, Start, End, [...Result, N], [...CurrIndex, 1]>
      : Fill<Rest, N, Start, End, [...Result, First], [...CurrIndex, 1]>
    : Fill<Rest, N, Start, End, [...Result, First], [...CurrIndex, 1]>
  : Result;

// 本题大意就是把给定数组，按照给定范围替换掉给定的元素
// 基本思路就是遍历数组，然后设定一个变量记录当前index，再去与start，end比较，是否在它们范围内
// 若在则替换，继续遍历，若不在则将原本的First元素压入结果，继续遍历
// 这里又涉及到数字比较，因此使用之前的数组代替数字的比较方法去比较
// 按照基本思路写完后发现有3个case不通过，其中两个都是start和end相等的情况，因此猜测是比较时两者相同的情况出现了问题
// 经过测试，发现是在比较数组大小时，当两个数相等时也会返回true，因此在后面比较end是否比当前index大时，二者相等时
// 按题目要求应该是已经结束替换，也就是要求返回false，所以另外写一个函数来对这个特殊情况进行判断并返回来false
// 这样改写过后就可以全部通过了