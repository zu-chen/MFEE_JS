// 從"3.生日下拉清單-完成"開始
const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')

let yearString = `<option value="">請選擇西元年</option>`
for (i = 1910; i < 2011; i++) {
  yearString += `<option value="">${i}</option>`
}
year.innerHTML = yearString

let monthString = `<option value="">請選擇月份</option>`
for (i = 1; i < 13; i++) {
  monthString += `<option value="">${i}</option>`
}
month.innerHTML = monthString

let dateString = `<option value="">請選擇日期</option>`
for (i = 1; i < 32; i++) {
  dateString += `<option value="">${i}</option>`
}
date.innerHTML = dateString
