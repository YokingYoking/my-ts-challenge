interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>]
  : [];

  // 本题大意简明，先序遍历树，首先判断是否为空，若为空直接返回空数组
  // 一开始的想法是判断左节点是否为空，若不是则递归左节点，若是则返回该节点val和对右节点递归
  // 这样写无法通过是因为没有对T[val]展开，结果不正确，而且实际上左右节点也是写成对称的递归展开即可
  // 所以直接返回一个数组分别先对左节点递归解构展开，返回该node的value，再对右节点递归解构展开
  // 这样写test是都通过了，但是汇报一个“类型实例化过深且可能无限”的错误
  // 这是因为在最前面写T extends TreeNode的时候没有用中括号括起来
  // 为什么要这样写：在条件判断类型的定义中，将泛型参数使用[]括起来，即可阻断条件判断类型的分配，此时，传入参数T的类型将被当做一个整体，不再分配。