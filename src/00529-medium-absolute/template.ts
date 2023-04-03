type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer Num}` ? `${Num}` : `${T}`

// 这题大意取绝对值并返回这个值的字符串，那思路比较好想，把原来的类型都转换成字符串然后把符号去掉即可
// 主要还是ts的语法点，这里直接用模板字符串转换类型，bigint也会自动转成正常的数字形式