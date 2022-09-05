export default function (arr) {
  if (Array.isArray(arr)) {
    let result = arr.map((el) => {
      return el.reduce((acc, el) => {
        return (acc += el);
      }, 0);
    });

    return result;
  } else {
    return new Error("타입 에러");
  }
}
