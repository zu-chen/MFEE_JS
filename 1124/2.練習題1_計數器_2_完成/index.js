// 獲得元素介面物件
const total = document.getElementById('total')

// 加掛事件監聽器(類型, 要作什麼的函式)
total.addEventListener('click', function () {
  // 要轉為數字資料類型才能作數字加運算
  total.innerHTML = +total.innerHTML + 1
})
