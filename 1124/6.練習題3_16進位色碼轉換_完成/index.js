// 獲得元素介面物件
const text = document.getElementById('text')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')
const apply = document.getElementById('apply')

function decimal2Hex(num) {
  let hexString = num.toString(16)

  if (num.toString(16).length < 2) {
    hexString = '0' + num.toString(16)
  }

  return hexString
}

// 最簡寫
// function decimal2Hex(num) {
//   return num.toString(16).length < 2 ? '0' + num.toString(16) : num.toString(16)
// }

// 加掛事件監聽器(類型, 要作什麼的函式)
apply.addEventListener('click', function () {
  console.log(
    decimal2Hex(+color1.value) +
      decimal2Hex(+color2.value) +
      decimal2Hex(+color3.value)
  )

  // 字串連接成色碼
  text.style.color =
    '#' +
    decimal2Hex(+color1.value) +
    decimal2Hex(+color2.value) +
    decimal2Hex(+color3.value)
})
