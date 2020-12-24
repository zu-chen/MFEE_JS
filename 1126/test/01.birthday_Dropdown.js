// 從"3.生日下拉清單-完成"開始
const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')
const checkAge = document.getElementById('checkAge')
const message = document.getElementById('message')

let yearString = `<option value="0">請選擇西元年</option>`
for (let i = 1910; i < 2011; i++) {
  yearString += `<option value="${i}">${i}</option>`
}
year.innerHTML = yearString

let monthString = `<option value="0">請選擇月份</option>`
for (let i = 1; i < 13; i++) {
  monthString += `<option value="${i}">${i}</option>`
}
month.innerHTML = monthString

let dateString = `<option value="0">請選擇日期</option>`
for (let i = 1; i < 32; i++) {
  dateString += `<option value="${i}">${i}</option>`
}
date.innerHTML = dateString

let birthY = 0
let birthM = 0
let birthD = 0

year.addEventListener('change', function () {
  birthY = +year.value
  if (birthY && birthM) {
    const days = new Date(birthY, birthM, 0).getDate()
    // 要先回復原樣!
    let dateString = `<option value="0">請選擇日期</option>`
    for (let i = 1; i < days; i++) {
      dateString += `<option value="${i}">${i}</option>`
    }
    // 並且印出來
    date.innerHTML = dateString
  }
  console.log(birthY, birthM, birthD)
})

month.addEventListener('change', function () {
  birthM = +month.value
  if (birthY && birthM) {
    const days = new Date(birthY, birthM, 0).getDate()
    // 要先回復原樣!
    let dateString = `<option value="0">請選擇日期</option>`
    for (let i = 1; i < days; i++) {
      dateString += `<option value="${i}">${i}</option>`
    }
    // 並且印出來
    date.innerHTML = dateString
  }
  console.log(birthY, birthM, birthD)
})

date.addEventListener('change', function () {
  birthD = +date.value
  console.log(birthY, birthM, birthD)
})

// 顯示是否滿18歲
checkAge.addEventListener('click', function () {
  if (birthY && birthM && birthD) {
    const now = new Date()
    const nowY = now.getFullYear()
    const nowM = now.getMonth() + 1
    const nowD = now.getDate()
    let isOver18 = false

    if (nowY - birthY > 18) isOver18 = true
    if (nowY - birthY === 18 && nowM - birthM > 0) isOver18 = true
    if (nowY - birthY === 18 && nowM - birthM === 0 && nowD - birthD >= 0)
      isOver18 = true
    message.innerHTML = isOver18 ? '已滿18歲' : '未滿18歲'
  } else {
    alert('請先選擇出生年月日')
  }
})
