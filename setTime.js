setTimeout(() => {
  console.log("a");

  for (let i = 0; i < 10000; i++) {
    console.log("실행중");
  }
  console.log("끝끝끝");

  setTimeout(() => {
    console.log("b");

    setTimeout(() => {
      console.log("c");

      setTimeout(() => {
        console.log("d");

        setTimeout(() => {
          console.log("e");

          setTimeout(() => {
            console.log("f");

            setTimeout(() => {
              console.log("g");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 2000);
}, 3000);
