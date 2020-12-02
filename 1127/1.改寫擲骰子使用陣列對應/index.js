const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

start.addEventListener('click', function () {
  // 隨機產生一個1-6的整數
  const p = Math.floor(Math.random() * 6) + 1

  // 對照要呈現的圖示的fontawesome標記
  // <i class="fas fa-dice-one"></i>
  // 用陣列對應標記要使用的不同的字串
  const diceTagArray = ['one', 'two', 'three', 'four', 'five', 'six']

  // 呈現 圖示
  // 使用樣版字串代入對應的字串值
  dice.innerHTML = `<i class="fas fa-dice-${diceTagArray[p - 1]}"></i>`

  // 呈現 點數
  point.innerHTML = p + '點'
})
