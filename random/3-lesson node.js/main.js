function query(selector) {
  return document.querySelector(selector)
}

const balance = document.querySelector('.balance');
const result = document.querySelector('.result');
const bid = document.querySelector('.bid');
const number = document.querySelector('.number');
const submit = document.querySelector('#submit');
const name = document.querySelector('#name');
const pass = document.querySelector('#password')
const letsplay = document.querySelector('#lets-play')
const title = document.querySelector('#title')
const nameModal = new bootstrap.Modal(query('#name-modal'))
const show = document.querySelector('#show')

let money = 100;
let maxMoney = money;



let userName = ''
bid.value = ''
number.value = ''
nameModal.show()

show.onclick = () => {
  let users = JSON.parse(localStorage.getItem('users'))
  console.log(users);
}
letsplay.onclick = () => {
  userName = name.value;
  title.innerText = name.value + ' gamer'

  nameModal.hide()
}
submit.onclick = () => {

  const userBit = Number(bid.value);
  const userNumber = Number(number.value);

  if (userBit < 5 || userBit > money) {
    console.log(hato)
  }
  else if (userNumber < 0 || userNumber > 6) {
    console.log('Xato . 0 dan 6 gacha')
  }
  else {
    let guess = random(0, 6)
    if (guess === userNumber) {

      money += userBit;
      result.innerText = 'Your are win';
      balance.innerText = `Balance: $${money}`
    }
    if (money > maxMoney) {
      maxMoney = money;
    }
    else {
      money -= userBit;
      result.innerText = `Yutqazdingiz! Bu son ${guess} edi!`
      balance.innerText = `Balance: $${money}`
    }
  }

  if (money <= 0) {
    result.innerText = 'Game over';
    let users = JSON.parse(localStorage.setItem('users'))

    if (users === null) {
      users = []
    }
    users.push({ name: userName, money: maxMoney })
    localStorage.setItem('users',)
  }


}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}