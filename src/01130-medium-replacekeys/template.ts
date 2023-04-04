type ReplaceKeys<U, T, Y> = U extends any
  ? {
      [Key in keyof U]: Key extends T
        ? Key extends keyof Y
          ? Y[Key]
          : never
        : U[Key];
    }
  : never;

  // 本题大意，替换掉type对象集合中每个对象的指定键值
  // 从is-union这题知道要遍历一个集合必须写一个判断式，位于左侧的集合会自动解开遍历，因此要先写一个必为true的判断式给U
  // 之后就是正常的遍历所有Key，对比是否分别存在在T和Y中，命中的话就替换掉，否则返回原值