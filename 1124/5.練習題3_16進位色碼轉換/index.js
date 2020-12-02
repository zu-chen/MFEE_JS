// 獲得元素介面物件
const text = document.getElementById('text')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')
const apply = document.getElementById('apply')

// 加掛事件監聽器(類型, 要作什麼的函式)
apply.addEventListener('click', function () {
  const hexColor1 = (+color1.value).toString(16)
  const hexColor2 = (+color2.value).toString(16)
  const hexColor3 = (+color3.value).toString(16)

  // 字串連接成色碼
  text.style.color = '#' + hexColor1 + hexColor2 + hexColor3
})
