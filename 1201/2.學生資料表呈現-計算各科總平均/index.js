const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

// 學生資料的物件的長相
// {
//   name: '李一百',
//   chinese: 100,
//   math: 60
//   english: 85
// }

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
let bodyDisplay = ''

const studentArray = []

for (let i = 1; i < rawDataArray.length; i++) {
  // 從每個陣列取得內部的陣列值
  const bodyArray = rawDataArray[i].replaceAll('"', '').split(',')

  console.log('bodyArray', bodyArray)

  // 建立學生物件
  const student = {
    name: bodyArray[0],
    chinese: +bodyArray[1],
    math: +bodyArray[2],
    english: +bodyArray[3],
  }

  // 插入到學生資料陣列中
  studentArray.push(student)
}

console.log(studentArray)

let chineseTotal = 0
let mathTotal = 0
let englishTotal = 0

for (let i = 0; i < studentArray.length; i++) {
  bodyDisplay += `<tr>
                    <td>${studentArray[i].name}</td>
                    <td>${studentArray[i].chinese}</td>
                    <td>${studentArray[i].math}</td>
                    <td>${studentArray[i].english}</td>
                  </tr>`

  chineseTotal += studentArray[i].chinese
  mathTotal += studentArray[i].math
  englishTotal += studentArray[i].english
}

console.log(
  (chineseTotal / studentArray.length).toFixed(0),
  (mathTotal / studentArray.length).toFixed(0),
  (englishTotal / studentArray.length).toFixed(0)
)

bodyDisplay += `<tr>
                  <td>各科總平均</td>
                  <td>
                    ${(chineseTotal / studentArray.length).toFixed(0)}
                  </td>
                  <td>
                    ${(mathTotal / studentArray.length).toFixed(0)}
                  </td>
                  <td>
                    ${(englishTotal / studentArray.length).toFixed(0)}
                  </td>
                <tr>`

dataDisplay += `<tbody>${bodyDisplay}</tbody>`

// 最後呈現在網頁的table標記裡
data.innerHTML = dataDisplay
