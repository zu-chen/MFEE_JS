const name = document.getElementById('name')
const tel = document.getElementById('tel')
const address = document.getElementById('address')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const register = document.getElementById('register')

// console.log(name, tel, address, username, password, password2, register)

register.addEventListener('click', function () {
  if (!name.value.trim()) {
    alert('姓名沒填')
    return
  }

  if (!tel.value.trim()) {
    alert('電話沒填')
    return
  }

  if (!address.value.trim()) {
    alert('地址沒填')
    return
  }

  if (password.value !== password2.value) {
    alert('兩次輸入的密碼不同')
  }
})
