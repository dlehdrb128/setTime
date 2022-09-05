import gugudan from "./util/gugudanValue.js";

let count = 0;

// console.dir((document.body.innerHTML = "<div>호호</div>"));

let result = gugudan(2, 9, 1, 20);

console.log(result);

document.body.innerHTML = `
${result.html.join("")}
곱셈 횟수 : ${result.multiplyCounter}
${result.resultTotal.join("")}
`;

window.addEventListener("click", (e) => {
  if (e.target.dataset.hasOwnProperty("number")) {
    e.target.remove();
    count++;
  }

  if (count % 5 === 0) {
    alert(count);
  }
});
