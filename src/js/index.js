function stringToInt(str) {
  if (str.includes('%')) {
    let x = str.split('%');
    str = x.join('');
    return parseInt(str);
  }

  if (str.includes(',')) {
    let x = str.split(',');
    str = x.join('');
    return parseInt(str);
  } else {
    return parseInt(str);
  }
}

const doc = document;

const itemNumber = doc.getElementsByClassName('item-number');
const change = doc.getElementById("change");
const percent = doc.getElementsByClassName("percent");
const pg = doc.getElementsByClassName("pg");

const changeWord = ['Consulting', 'Web design', 'Illustrations'];

var t = 0;

var changeTime = setInterval(function() {
  change.innerHTML = changeWord[t];
  t++;
  if (t >= 3) {
    t = t % 3;
  }
}, 5000);

const itemToNumber = [];
const percentToNumber = [];

for (let i = 0; i < 3; i++) {
  itemToNumber[i] = stringToInt(itemNumber[i].innerHTML);
}

for (let i = 0; i < 4; i++) {
  percentToNumber[i] = stringToInt(percent[i].innerHTML);
}

function zeroToNumber(obj, num, time, prefix = '', parent = null, start = 0) {
  let current = start;
  let until = Math.floor(time / (num - current));
  var timer = setInterval(function () {
    if (parent != null && current >= 50) {
      parent.style.width = current + prefix;
    }
    obj.innerHTML = current + prefix;

    current++;
    if (current == num + 1) {
      clearInterval(timer);
    }
  }, until);
}

zeroToNumber(percent[0], percentToNumber[0], 2000, '%', pg[0], 50);
zeroToNumber(percent[1], percentToNumber[1], 2000, '%', pg[1], 50);
zeroToNumber(percent[2], percentToNumber[2], 2000, '%', pg[2], 50);
zeroToNumber(percent[3], percentToNumber[3], 2000, '%', pg[3], 50);

zeroToNumber(itemNumber[0], itemToNumber[0], 2000);
zeroToNumber(itemNumber[1], itemToNumber[1], 2000);
zeroToNumber(itemNumber[2], itemToNumber[2], 2000);


