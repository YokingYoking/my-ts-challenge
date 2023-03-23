import type { Equal } from "@type-challenges/utils";

// 由于ts的模块化标准问题，当ts文件中有引入的时候，就会把那个文件当做一个模块，所以需要手动导出这个type
export type Includes<T extends readonly any[], U> = T extends [ 
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true // 这里由于需要对类型进行对比，可以先借用这个库的工具进行比对判断
    ? true
    : Includes<Rest, U>
  : false;

// 题目大意较为简明，判断U是否有值在T中，直接解法就是遍历一个一个比较
// 但是要直接返回boolean类型，之前在对象里遍历的方法都不好用了
// 这里只能选用之前用过的递归去遍历，再加上之前实现过的first写法，综合js实现如下
function myIncludes(list: any[], key: any) {
  function _(list: any[], key: any): boolean {
    if (list.length === 0) {
      // 遍历结束
      return false;
    }
    const [first, ...rest] = list;
    if (first === key) {
      return true;
    } else {
      return _(rest, key);
    }
  }
}
