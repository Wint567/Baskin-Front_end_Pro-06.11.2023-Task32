class SuperMash{
  check(obj){
    const {X, Y, znak} = obj;

    if(this.operator(znak)) {
      switch (znak){
        case '+':
          console.log(`${X} + ${Y} = ${X + Y}`);
          break;
        case '-':
          console.log(`${X} - ${Y} = ${X - Y}`);
          break;
        case '*':
          console.log(`${X} * ${Y} = ${X * Y}`);
          break;
        case '/':
          console.log(`${X} / ${Y} = ${X / Y}`);
          break;
        case '%':
          console.log(`${X} % ${Y} = ${X % Y}`);
          break;
      }
    } else {
      console.log("Неверно введён знак");
      this.input()
    }
  }

  operator(znak){
    const validOperators = ['+', '-', '*', '/', '%'];
    return validOperators.includes(znak);
  }

  input() {
    const X = parseFloat(prompt("Введите X:"));
    const Y = parseFloat(prompt("Введите Y:"));
    const znak = prompt("Введите знак (+, -, /, *, %):");
    this.check({X, Y, znak});
  }
}

const p = new SuperMash();
const obj = {X: 12, Y: 3, znak: '/'};
p.check(obj);