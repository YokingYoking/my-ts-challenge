type Last<T extends any[]> = T extends [... infer Rest, infer Last] ? Last : never

// 题意简明，参考first那题用解构展开解决

// 当时first那题还给了几个解法，不是所有都适用在last中