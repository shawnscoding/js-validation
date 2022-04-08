import {
  isArr,
  isBetweenTwoAndTen,
  isNotEmptyStr,
  isNum,
  isObj,
  isPositiveNum,
  isStr,
  isStrLengthFour,
  isTruthy,
  isNotEmptyArr,
  isArrOfObj,
  isNotUndefined,
  isBoolean,
  isNotNull,
  isNotEmptyObj,
} from "./util";
// String type.
// Number type.
// Boolean type.
// Null type.
// Undefined type.
// object
// array
describe("all string validation passed", () => {
  it("validate if it's string", () => {
    let res = isStr();
    expect(res).toBe(false);

    res = isStr(undefined);
    expect(res).toBe(false);

    res = isStr(false);
    expect(res).toBe(false);

    res = isStr(null);
    expect(res).toBe(false);

    res = isStr("");
    expect(res).toBe(true);

    res = isStr("hello");
    expect(res).toBe(true);

    res = isStr(1);
    expect(res).toBe(false);

    res = isStr({});
    expect(res).toBe(false);

    res = isStr([]);
    expect(res).toBe(false);
  });

  it("validate if it's string and not empty", () => {
    let res = isNotEmptyStr();
    expect(res).toBe(false);

    res = isNotEmptyStr(undefined);
    expect(res).toBe(false);

    res = isNotEmptyStr(false);
    expect(res).toBe(false);

    res = isNotEmptyStr(null);
    expect(res).toBe(false);

    res = isNotEmptyStr("");
    expect(res).toBe(false);

    res = isNotEmptyStr("hello");
    expect(res).toBe(true);

    res = isNotEmptyStr(1);
    expect(res).toBe(false);

    res = isNotEmptyStr({});
    expect(res).toBe(false);

    res = isNotEmptyStr([]);
    expect(res).toBe(false);
  });

  it("validate if the length of string is four", () => {
    let res = isStrLengthFour();
    expect(res).toBe(false);

    res = isStrLengthFour(undefined);
    expect(res).toBe(false);

    res = isStrLengthFour(false);
    expect(res).toBe(false);

    res = isStrLengthFour(null);
    expect(res).toBe(false);

    res = isStrLengthFour("");
    expect(res).toBe(false);

    res = isStrLengthFour("hello");
    expect(res).toBe(false);

    res = isStrLengthFour("hell");
    expect(res).toBe(true);

    res = isStrLengthFour(1);
    expect(res).toBe(false);

    res = isStrLengthFour({});
    expect(res).toBe(false);

    res = isStrLengthFour([]);
    expect(res).toBe(false);
  });
});

describe("all number validation passed", () => {
  it("validate if it's a number", () => {
    let res = isNum();
    expect(res).toBe(false);

    res = isNum(undefined);
    expect(res).toBe(false);

    res = isNum(false);
    expect(res).toBe(false);

    res = isNum(null);
    expect(res).toBe(false);

    res = isNum("");
    expect(res).toBe(false);

    res = isNum("hello");
    expect(res).toBe(false);

    res = isNum(1);
    expect(res).toBe(true);

    res = isNum(NaN);
    expect(res).toBe(false);

    res = isNum({});
    expect(res).toBe(false);

    res = isNum([]);
    expect(res).toBe(false);
  });

  it("validate if it's a positive number", () => {
    let res = isPositiveNum();
    expect(res).toBe(false);

    res = isPositiveNum(undefined);
    expect(res).toBe(false);

    res = isPositiveNum(false);
    expect(res).toBe(false);

    res = isPositiveNum(null);
    expect(res).toBe(false);

    res = isPositiveNum("");
    expect(res).toBe(false);

    res = isPositiveNum(-11);
    expect(res).toBe(false);

    res = isPositiveNum(111);
    expect(res).toBe(true);

    res = isPositiveNum({});
    expect(res).toBe(false);

    res = isPositiveNum([]);
    expect(res).toBe(false);
  });

  it("validate if it's a number between two and ten ", () => {
    let res = isBetweenTwoAndTen();
    expect(res).toBe(false);

    res = isBetweenTwoAndTen(undefined);
    expect(res).toBe(false);

    res = isBetweenTwoAndTen(false);
    expect(res).toBe(false);

    res = isBetweenTwoAndTen(null);
    expect(res).toBe(false);

    res = isBetweenTwoAndTen("");
    expect(res).toBe(false);

    res = isBetweenTwoAndTen(1);
    expect(res).toBe(false);

    res = isBetweenTwoAndTen(11);
    expect(res).toBe(false);

    res = isBetweenTwoAndTen(5);
    expect(res).toBe(true);

    res = isBetweenTwoAndTen({});
    expect(res).toBe(false);

    res = isBetweenTwoAndTen([]);
    expect(res).toBe(false);
  });
});

describe("boolean validation passed", () => {
  it("validate if it's boolean", () => {
    let res = isBoolean();
    expect(res).toBe(false);

    res = isBoolean(undefined);
    expect(res).toBe(false);

    res = isBoolean(false);
    expect(res).toBe(true);

    res = isBoolean(true);
    expect(res).toBe(true);

    res = isBoolean(null);
    expect(res).toBe(false);

    res = isBoolean("");
    expect(res).toBe(false);

    res = isBoolean("hello");
    expect(res).toBe(false);

    res = isBoolean(1);
    expect(res).toBe(false);

    res = isBoolean({});
    expect(res).toBe(false);

    res = isBoolean([]);
    expect(res).toBe(false);
  });
});

describe("null validation passed", () => {
  it("validate if it's not null", () => {
    let res = isNotNull();
    expect(res).toBe(true);

    res = isNotNull(undefined);
    expect(res).toBe(true);

    res = isNotNull(false);
    expect(res).toBe(true);

    res = isNotNull(true);
    expect(res).toBe(true);

    res = isNotNull(null);
    expect(res).toBe(false);

    res = isNotNull("");
    expect(res).toBe(true);

    res = isNotNull("hello");
    expect(res).toBe(true);

    res = isNotNull(1);
    expect(res).toBe(true);

    res = isNotNull({});
    expect(res).toBe(true);

    res = isNotNull([]);
    expect(res).toBe(true);
  });
});

describe("all undefined validation passed", () => {
  it("validate if it's undefined", () => {
    let res = isNotUndefined();
    expect(res).toBe(false);

    res = isNotUndefined(undefined);
    expect(res).toBe(false);

    res = isNotUndefined(false);
    expect(res).toBe(true);

    res = isNotUndefined(null);
    expect(res).toBe(true);

    res = isNotUndefined("");
    expect(res).toBe(true);

    res = isNotUndefined("hello");
    expect(res).toBe(true);

    res = isNotUndefined(1);
    expect(res).toBe(true);

    res = isNotUndefined({});
    expect(res).toBe(true);

    res = isNotUndefined([]);
    expect(res).toBe(true);
  });
});

describe("all object validation passed", () => {
  it("validate if it's an object", () => {
    let res = isObj();
    expect(res).toBe(false);

    res = isObj(undefined);
    expect(res).toBe(false);

    res = isObj(false);
    expect(res).toBe(false);

    res = isObj(null);
    expect(res).toBe(false);

    res = isObj("");
    expect(res).toBe(false);

    res = isObj("hello");
    expect(res).toBe(false);

    res = isObj(1);
    expect(res).toBe(false);

    res = isObj({});
    expect(res).toBe(true);

    res = isObj([]);
    expect(res).toBe(false);
  });

  it("validate if it's an object and not empty", () => {
    let res = isNotEmptyObj();
    expect(res).toBe(false);

    res = isNotEmptyObj(undefined);
    expect(res).toBe(false);

    res = isNotEmptyObj(false);
    expect(res).toBe(false);

    res = isNotEmptyObj(null);
    expect(res).toBe(false);

    res = isNotEmptyObj("");
    expect(res).toBe(false);

    res = isNotEmptyObj("hello");
    expect(res).toBe(false);

    res = isNotEmptyObj(1);
    expect(res).toBe(false);

    res = isNotEmptyObj({});
    expect(res).toBe(false);

    res = isNotEmptyObj({ hellol: "world" });
    expect(res).toBe(true);

    res = isNotEmptyObj([]);
    expect(res).toBe(false);
  });
});

describe("all array validation passed", () => {
  it("validate if it's an array", () => {
    let res = isArr();
    expect(res).toBe(false);

    res = isArr(undefined);
    expect(res).toBe(false);

    res = isArr(false);
    expect(res).toBe(false);

    res = isArr(null);
    expect(res).toBe(false);

    res = isArr("");
    expect(res).toBe(false);

    res = isArr("hello");
    expect(res).toBe(false);

    res = isArr(1);
    expect(res).toBe(false);

    res = isArr({});
    expect(res).toBe(false);

    res = isArr([]);
    expect(res).toBe(true);
  });

  it("validate if it's an array and not empty", () => {
    let res = isNotEmptyArr();
    expect(res).toBe(false);

    res = isNotEmptyArr(undefined);
    expect(res).toBe(false);

    res = isNotEmptyArr(false);
    expect(res).toBe(false);

    res = isNotEmptyArr(null);
    expect(res).toBe(false);

    res = isNotEmptyArr("");
    expect(res).toBe(false);

    res = isNotEmptyArr("hello");
    expect(res).toBe(false);

    res = isNotEmptyArr(1);
    expect(res).toBe(false);

    res = isNotEmptyArr({});
    expect(res).toBe(false);

    res = isNotEmptyArr([]);
    expect(res).toBe(false);
    res = isNotEmptyArr(["hello", "world"]);
    expect(res).toBe(true);
  });

  it("validate if it's an array of object", () => {
    let res = isArrOfObj();
    expect(res).toBe(false);

    res = isArrOfObj(undefined);
    expect(res).toBe(false);

    res = isArrOfObj(false);
    expect(res).toBe(false);

    res = isArrOfObj(null);
    expect(res).toBe(false);

    res = isArrOfObj("");
    expect(res).toBe(false);

    res = isArrOfObj("hello");
    expect(res).toBe(false);

    res = isArrOfObj(1);
    expect(res).toBe(false);

    res = isArrOfObj({});
    expect(res).toBe(false);

    res = isArrOfObj([]);
    expect(res).toBe(false);
    res = isArrOfObj(["hello", "world"]);
    expect(res).toBe(false);

    res = isArrOfObj([{ hello: "world" }]);
    expect(res).toBe(true);
  });
});

describe("all truthy validation passed", () => {
  it("validate if it's truthy", () => {
    let res = isTruthy();
    expect(res).toBe(false);

    res = isTruthy(undefined);
    expect(res).toBe(false);

    res = isTruthy(false);
    expect(res).toBe(false);

    res = isTruthy(true);
    expect(res).toBe(true);

    res = isTruthy(null);
    expect(res).toBe(false);

    res = isTruthy("");
    expect(res).toBe(true);

    res = isTruthy("hello");
    expect(res).toBe(true);

    res = isTruthy(1);
    expect(res).toBe(true);

    res = isTruthy(0);
    expect(res).toBe(false);

    res = isTruthy("0");
    expect(res).toBe(true);

    res = isTruthy(-599);
    expect(res).toBe(true);

    res = isTruthy({});
    expect(res).toBe(true);

    res = isTruthy([]);
    expect(res).toBe(true);
  });
});
