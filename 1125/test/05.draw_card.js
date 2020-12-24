const message = document.getElementById('message')
const start = document.getElementById('start')
const reset = document.getElementById('reset')

// 單次抽卡
// start.addEventListener('click', function () {
//   const rand = Math.floor(Math.random() * 100) + 1

//   if (rand >= 1 && rand <= 10) {
//     message.innerHTML = '五星卡'
//   }

//   if (rand >= 11 && rand <= 40) {
//     message.innerHTML = '四星卡'
//   }

//   if (rand >= 41 && rand <= 100) {
//     message.innerHTML = '三星卡'
//   }
// })

// 十連抽
start.addEventListener('click', function () {
  for (let i = 1; i < 11; i++) {
    const rand = Math.floor(Math.random() * 100) + 1
    if (rand < 4) {
      message.innerHTML += '<span style="color: gold;">五星卡</span>'
    }

    if (rand > 3 && rand < 21) {
      message.innerHTML += '<span style="color: silver;">四星卡</span>'
    }

    if (rand > 20) {
      message.innerHTML += '<span>三星卡</span>'
    }
  }
  message.innerHTML += '<br>'
})

reset.addEventListener('click', function () {
  message.innerHTML = ''
})
