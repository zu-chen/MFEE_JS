const display = document.getElementById('display')
const start = document.getElementById('start')
const reset = document.getElementById('reset')

start.addEventListener('click', function () {
  for (var j = 1; j < 10; j++) {
    var i = Math.floor(Math.random() * 100) + 1
    // 1-3
    if (i < 4) {
      display.innerHTML += '<span style="color:gold">五星卡</span>'
    }

    // 4-30
    if ((i > 3) & (i < 31)) {
      display.innerHTML += '<span style="color:silver">四星卡</span>'
    }

    // 31-100
    if (i > 30) {
      display.innerHTML += '三星卡'
    }
  }
})

reset.addEventListener('click', function () {
  display.innerHTML = ''
})
