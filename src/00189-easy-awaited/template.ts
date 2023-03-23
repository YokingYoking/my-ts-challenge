type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer X>
  ? X extends PromiseLike<any>
    ? MyAwaited<X>
    : X
  : never;

// 题目大意就是解开promise的嵌套，返回promise套的泛型，难以用js类比，因此只能说渐进式一个一个题解
// 新知识点: infer, infer相当于设置一个未知数（类型）
// 实际上这种嵌套第一反应想到的解法是递归, 因此对返回的值再调用一次MyAwaited，而如果已经完全解掉promise了就直接返回T

function unpkgPromise(p: any) {} // 伪代码：假设有一个函数是将promise中的参数拿出来
function solvement(t: any) {
  let x = unpkgPromise(t);
  if (t instanceof Promise) {
    solvement(x);
  } else {
    return t;
  }
}

// 难点在于最后一个T的case, 给与的类型不是一个正式的Promise，所以要写成PromiseLike类型，泛型定为any

// 还需要限制一下T是promise，否则抛出错误，又因为要满足类似T的case这样的情况，所以用PromiseLike
// unknown实际上在Promise类型定义里就是这样写的，为了限制一定要给定Promise的泛型

// 但是限制了T的类型后又会发现X报错说X不是promiselike，所以又要加一个判断x的类型，即是三元表达式嵌套一下
// 并且发现加了T类型限制后，外面一层的三元表达式已经不会走到最后那个返回T的分支了所以可以简化成never
