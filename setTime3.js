let num = 0;

let a = setInterval(() => {
  num++;
  console.log(num);
  if (num === 60) clearInterval(a);
}, 10);
