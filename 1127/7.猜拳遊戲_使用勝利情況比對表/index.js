// 使用者點了要出什麼拳的按鈕
const scissors = document.getElementById('scissors')
const paper = document.getElementById('paper')
const rock = document.getElementById('rock')
// 呈現的文字
const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')

//剪刀=1, 石頭=2, 布=3
const winMap = [
  [2, 1],
  [3, 2],
  [1, 3],
]

// const winMap = ['21', '32', '13']

// 數字代表的拳的文字
const textArray = ['剪刀', '石頭', '布']

// 記錄使用者出的拳(以數字代表)。剪刀=1, 石頭=2, 布=3
let userNumber = 0

// 記錄電腦出的拳(以數字代表) - 1~3的隨機數字。剪刀=1, 石頭=2, 布=3
let computerNumber = 0

// 檢查與呈現結果函式
function checkResult() {
  // 呈現文字(用索引值查陣列對照)
  user.innerHTML = '你出了 ' + textArray[userNumber - 1]
  computer.innerHTML = '電腦出了 ' + textArray[computerNumber - 1]

  // 判斷勝負與呈現勝負資訊(以使用者為基礎)，查贏家對照表
  const fIndex = winMap.findIndex(function (value, index, array) {
    return value[0] === userNumber && value[1] === computerNumber
    //return value === userNumber + ''+ computerNumber
  })

  console.log(userNumber, computerNumber, fIndex)

  if (userNumber === computerNumber) {
    result.innerHTML = '平手'
    // 下面return是為了跳出函式的作用，以免邏輯判斷出錯
    return
  }
  // 有查到表為贏
  if (fIndex !== -1) {
    result.innerHTML = '你贏了！'
    // 下面return是為了跳出函式的作用，以免邏輯判斷出錯
    return
  }

  result.innerHTML = '輸了....'
}

// 剪刀=1, 石頭=2, 布=3
scissors.addEventListener('click', function () {
  // 電腦出的拳，1~3的隨機數字
  computerNumber = Math.floor(Math.random() * 3) + 1

  // 設定使用者出的拳(以數字代表)
  userNumber = 1

  // 檢查與出現結果
  checkResult()
})

// 剪刀=1, 石頭=2, 布=3
rock.addEventListener('click', function () {
  // 電腦出的拳，1~3的隨機數字
  computerNumber = Math.floor(Math.random() * 3) + 1

  // 設定使用者出的拳(以數字代表)
  userNumber = 2

  // 檢查與出現結果
  checkResult()
})

// 剪刀=1, 石頭=2, 布=3
paper.addEventListener('click', function () {
  // 電腦出的拳，1~3的隨機數字
  computerNumber = Math.floor(Math.random() * 3) + 1

  // 設定使用者出的拳(以數字代表)
  userNumber = 3

  // 檢查與出現結果
  checkResult()
})
