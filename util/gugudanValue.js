import absValue from "./absValue.js";
import Realnumber from "./Realnumber.js";
import add from "./add.js";

const gugudan = (start, end, startDan = 1, endDan = 9) => {
  let gugudan = {
    html: [],
    total: [],
    multiplyCounter: 0,
    resultTotal: [],
  };

  for (let i = start; i <= end; i++) {
    let save = [];
    for (let j = startDan; j <= endDan; j++) {
      save.push(i * j);

      gugudan.html.push(
        `<div data-number="${i * j}">${i}*${j}=${absValue(
          Realnumber(i * j)
        )}</div>`
      );
      gugudan.multiplyCounter++;

      if (j === end) {
        gugudan.total.push(save);
      }
    }
  }

  gugudan.resultTotal = add(gugudan.total).map((el, i) => {
    return `<div>${start + i}단 ${el}</div>`;
  });

  return gugudan;
};

export default gugudan;
