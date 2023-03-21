import type { Equal, Expect } from "@type-challenges/utils";

// const 相当于把类型固定死为一个字面量类型
// 查看字面量类型就不再是string或number 而是一个具体的值'123'或123
const tuple = ["tesla", "model 3", "model X", "model Y"] as const; 
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, "2", 3, "4"] as const;

// typeof 用来获取js的类型（js -> ts）
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; "2": "2"; 3: 3; "4": "4" }>
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;
// 这里还需要判断值是否合法，因为对象的key类型只能是三种number, string, symbol
