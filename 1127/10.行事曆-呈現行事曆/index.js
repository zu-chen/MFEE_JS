const calendar = document.getElementById('calendar')
const title = document.getElementById('title')

// 呈現星期幾的標頭
const calHeaders = ['日', '一', '二', '三', '四', '五', '六']

let tableHeader = ''
for (let i = 0; i < calHeaders.length; i++) {
  tableHeader += `<th>${calHeaders[i]}</th>`
}

calendar.innerHTML = `<thead><tr>${tableHeader}</tr></thead>`

// 計算本月有幾天
const now = new Date()
//注意：月份是回傳 0-11 整數
// const month = now.getMonth()
// const year = now.getFullYear()

// 測試用
//注意：月份是回傳 0-11 整數
const month = 1
const year = 2020

title.innerHTML = `${year} / ${month + 1}`

// month = 11 相當於要找 11月有幾天
const days = new Date(year, month + 1, 0).getDate()
console.log('本月有幾天:', days)

// month = 10 相當於 11月的第一天是星期幾(0-6)
const firstDay = new Date(year, month, 1).getDay()
console.log('本月第一天是星期幾(0-6):', firstDay)

const daysDataArray = []

// 補前面的空位
for (let j = 0; j < firstDay; j++) {
  daysDataArray.push('')
}

// 由1開始到這個月最後一天的日期填入資料陣列
for (let i = 1; i < days + 1; i++) {
  daysDataArray.push(i)
}

console.log('行事曆資料陣列', daysDataArray)

// 準備呈現在網頁上
let dataDisplay = '<tr>'

for (let i = 0; i < daysDataArray.length; i++) {
  dataDisplay += `<td>${daysDataArray[i]}</td>`

  // 每7個後面要加入一個換下一列的標記
  if ((i + 1) % 7 === 0) {
    dataDisplay += '</tr><tr>'
  }
}

dataDisplay += '</tr>'

//console.log(dataDisplay)

// 呈現在網頁上
calendar.innerHTML += dataDisplay
