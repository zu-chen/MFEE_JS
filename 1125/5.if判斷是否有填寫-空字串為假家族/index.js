const num = document.getElementById('num')
const check = document.getElementById('check')

check.addEventListener('click', function () {
  // 判斷是否有填寫
  if (num.value.length === 0) {
    alert('沒填寫')
  } else {
    alert(num.value)
  }

  // 與上面的判斷方式相同
  if (!num.value) {
    alert('沒填寫')
  } else {
    alert(num.value)
  }
})
