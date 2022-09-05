let num = 1;

const a = setInterval(function() {
  num++
  console.log(num);
  if(num === 100) {
    clearInterval(a);
  }
}, 16)