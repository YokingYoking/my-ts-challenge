type String2Union<S extends string> = S extends `${infer First}${infer Rest}`
  ? First | String2Union<Rest>
  : S;

type AllCombinations<S extends string, U extends string = String2Union<S>> = [
  U
] extends [""]
  ? ""
  :
      | ""
      | {
          [Char in U]: `${Char}${AllCombinations<S, Exclude<U, Char>>}`;
        }[U];


// 本题大意简明，把字符串各种顺序的拼凑在一起然后返回出一个集合
// 结合2946可知可以通过类似遍历对象的方式来返回成一个集合
// 一开始的思路也比较简单，遍历每个字符，固定住，往后递归返回出来即可
// 为了方便遍历，需要先把字符串转换成集合，因此这里写了个工具函数递归返回出来单个字符的集合
// 同时观察case，需要同时返回出来空字符，所以拼接上去而且当S是空时也直接返回出来
// 为了便于遍历，另设一个参数U为S转换成集合，判断是否为空进行分支，非空则进入遍历循环
// 此时每个字符也是他自身的key，利用Exclude对剩余字符串继续遍历