const num = document.getElementById('num')
const check = document.getElementById('check')

check.addEventListener('click', function () {
  const numValue = +num.value

  let result = ''
  if (numValue > 100) result = 'num > 100'
  else result = 'num < 100'
  

  let result = numValue > 100 ? 'num > 100' : 'num < 100'
})
