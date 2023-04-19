type IsTuple<T> = [T] extends [never] ? false : T extends readonly any[] ? number extends T['length'] ? false : true : false

// 本题大意简明，判断是否元组，所以首先要明白元组和数组的区别，tuple有固定的长度，而array没有
// 因此通过['length']返回的，元组会是一个确切数字，而数组只会是一个number类型，所以要写number extends length
// 因为如果反着写，length无论如何都是number类型，就失去意义了
// 基本思路定下，再根据具体case分析，会发现case3和6无法通过，6的话好处理，在最外层加一个对never的判断即可
// case3直接在判断是否any[]这里加readonly即可，不会影响到其他判断