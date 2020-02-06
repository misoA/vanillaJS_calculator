// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const operate = {
  plus: function(x, y) {
    return x + y;
  },
  minus: function(x, y) {
    return x - y;
  },
  multiply: function(x, y) {
    return x * y;
  },
  divide: function(x, y) {
    return x / y;
  }
};

const buttons = document.querySelectorAll(".button");
const resultView = document.getElementById("js-result");

let opObj;

function reset() {
  resultView.innerText = "";
  opObj = {
    num: "",
    fOp: "",
    preBtn: ""
  };
}

function setFOp(op) {
  switch (op) {
    case "+":
      opObj.fOp = operate.plus;
      break;
    case "-":
      opObj.fOp = operate.minus;
      break;
    case "*":
      opObj.fOp = operate.multiply;
      break;
    case "/":
      opObj.fOp = operate.divide;
      break;
    default:
      break;
  }
}

function calculate() {
  const x = opObj.num;
  const y = parseInt(resultView.innerText, 10);
  if (x === 0 && opObj.fOp === operate.divide) {
    alert("Can not divide zero");
    reset();
    return 0;
  } else {
    const res = opObj.fOp(x, y);
    resultView.innerText = res;
    opObj.num = res;
    opObj.fOp = "";
    return res;
  }
}

function handelClick(event) {
  const value = event.target.value;

  if (event.target.classList.contains("num")) {
    if (opObj.preBtn === "num") {
      resultView.innerText += value;
    } else {
      resultView.innerText = value;
    }
    opObj.preBtn = "num";
  } else if (event.target.classList.contains("operator")) {
    if (opObj.preBtn === "num") {
      if (opObj.num === "") {
        opObj.num = parseInt(resultView.innerText, 10);
      } else if (opObj.fOp !== "") {
        calculate();
      }
    }
    if (value !== "=") {
      setFOp(value);
    }
    opObj.preBtn = "op";
  } else if (event.target.classList.contains("reset")) {
    reset();
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", handelClick);
});

function init() {
  reset();
}

init();
