// 使用者點了要出什麼拳的按鈕
const scissors = document.getElementById('scissors')
const paper = document.getElementById('paper')
const rock = document.getElementById('rock')
// 呈現的文字
const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')

// 數字代表的拳的文字
const textArray = ['剪刀', '石頭', '布']

// 記錄使用者出的拳(以數字代表)。剪刀=1, 石頭=2, 布=3
let userNumber = 0

// 記錄電腦出的拳(以數字代表) - 1~3的隨機數字。剪刀=1, 石頭=2, 布=3
let computerNumber = 0

function checkResult() {
  // 呈現文字(用索引值查陣列對照)
  user.innerHTML = '你出了 ' + textArray[userNumber - 1]
  computer.innerHTML = '電腦出了 ' + textArray[computerNumber - 1]

  // 判斷勝負與呈現勝負資訊(以使用者為基礎)
  // 相同值時是平手
  if (userNumber === computerNumber) {
    result.innerHTML = '平手'
  }

  // (以使用者為基礎相減值) (user - com)
  const subNumber = userNumber - computerNumber

  // 贏的情況
  if (subNumber === 1 || subNumber === -2) {
    result.innerHTML = '你贏了！'
  }

  // 輸的情況
  if (subNumber === -1 || subNumber === 2) {
    result.innerHTML = '輸了....'
  }
}

// 剪刀=1, 石頭=2, 布=3
scissors.addEventListener('click', function () {
  // 電腦出的拳，1~3的隨機數字
  computerNumber = Math.floor(Math.random() * 3) + 1

  // 設定使用者出的拳(以數字代表)
  userNumber = 1

  checkResult()
})

rock.addEventListener('click', function () {
  // 電腦出的拳，1~3的隨機數字
  computerNumber = Math.floor(Math.random() * 3) + 1

  // 設定使用者出的拳(以數字代表)
  userNumber = 2

  checkResult()
})

paper.addEventListener('click', function () {
  // 電腦出的拳，1~3的隨機數字
  computerNumber = Math.floor(Math.random() * 3) + 1

  // 設定使用者出的拳(以數字代表)
  userNumber = 3

  checkResult()
})
