 type MyCapitalize<S extends string> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : S

 // 思路简明，遍历字符串，将每个都变成大写即可
 // 这里主要是有个新知识点，Uppercase工具类，直接使用变成大写就行