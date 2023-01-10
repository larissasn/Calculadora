function insertValues(num) {
    const input = document.getElementById("input-value").value
    document.getElementById("input-value").value = input + num
}

function calculate() {
    const input = document.getElementById("input-value").value
    document.getElementById("input-value").value = eval(input)
}

function clearInput() {
    document.getElementById("input-value").value = ""
}

function invertValue() {
    calculate()

    document.getElementById("input-value").value
    document.getElementById("input-value").value = input * -1
}
function getPercentageValue(value, symbol) {
    value = value.split(symbol);
    value = (Number(value[0]) * Number(value[1])) / 100;
  
    return value;
  }
  
  function getResultPercentage() {
    let value = document.getElementById("input-value").value;
  
    if (value.includes("-")) {
      const percentageValue = getPercentageValue(value, "-");
      value = value.split("-")[0];
      return `${value}-${percentageValue}`;
    }
  
    if (value.includes("+")) {
      const percentageValue = getPercentageValue(value, "+");
  
      value = value.split("+")[0];
      return `${value}+${percentageValue}`;
    }
  
    if (value.includes("*")) {
      const percentageValue = getPercentageValue(value, "*");
      value = value.split("*")[0];
      return `${value}*${percentageValue}`;
    }
  
    if (value.includes("/")) {
      const percentageValue = getPercentageValue(value, "/");
      value = value.split("/")[0];
      return `${value}/${percentageValue}`;
    }
  }
  
  function percent() {
    
    document.getElementById("input-value").value = getResultPercentage();
    calculate()
  }
  