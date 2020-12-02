const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')

// 倒過來的順序
// let yearOptionString2 = ''
// for (let i = 2010; i > 1909; i--) {
//   yearOptionString2 += `<option value="${i}">${i}</option>`
// }

// <option value="1910">1910</option>
let yearOptionString = ''
for (let i = 1910; i < 2011; i++) {
  // 一般的字串串接寫法
  //yearOptionString += '<option value="' + i + '">' + i + '</option>'

  // 使用樣版字串代入變數i
  yearOptionString += `<option value="${i}">${i}</option>`
}

// 將西元年的選項值呈現
year.innerHTML = yearOptionString

////////// 月份呈現
let monthOptionString = ''
for (let i = 1; i < 13; i++) {
  // 使用樣版字串代入變數i
  monthOptionString += `<option value="${i}">${i}</option>`
}

// 將月份的選項值呈現
month.innerHTML = monthOptionString

/////// 日期呈現
let dateOptionString = ''
for (let i = 1; i < 32; i++) {
  dateOptionString += `<option value="${i}">${i}</option>`
}

// 將日期的選項值呈現
date.innerHTML = dateOptionString
