const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

const data = document.getElementById('data')

// 先以分行符號來取得多行陣列值
const rawDataArray = rawData.split('\n')

console.log(rawDataArray)

// 取代多餘的("")，然後分依逗號分取陣列值(連鎖語法)
const titleArray = rawDataArray[0].replaceAll('"', '').split(',')

console.log(titleArray)

let dataDisplay = ''

// 標題的呈現部份
let titleDisplay = ''

for (let i = 0; i < titleArray.length; i++) {
  titleDisplay += `<th>${titleArray[i]}</th>`
}

dataDisplay += `<thead><tr>${titleDisplay}</tr></thead>`

// 學生資料內容呈現部份

// 最後呈現在網頁的table標記裡
data.innerHTML = dataDisplay
