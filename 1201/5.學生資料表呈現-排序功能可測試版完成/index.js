const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"陳花花",80,60,70
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
const searchWord = document.getElementById('searchWord')
const search = document.getElementById('search')
const sortAscMath = document.getElementById('sortAscMath')
const sortDescMath = document.getElementById('sortDescMath')
const sortAscChinese = document.getElementById('sortAscChinese')
const sortDescChinese = document.getElementById('sortDescChinese')

// 專門用於呈現學生資料的函式
function displayStudentData(studentArray) {
  let bodyDisplay = ''
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

  return bodyDisplay
}

// 專門用於依各科成績來排序學生資料的函式
function sortStudentData(studentArray, field, direction = 'asc') {
  // 宣告一個新的陣列，由傳入參數拷貝得來
  // sort為有副作用的方法
  const newStudentArray = [...studentArray]

  if (direction === 'asc')
    newStudentArray.sort(function (a, b) {
      // 由小到大排序
      // 動態的物件屬性名稱，注意用類似陣列的方括號語法
      return a[field] - b[field]
    })
  else
    newStudentArray.sort(function (a, b) {
      // 由大到小排序
      // 動態的物件屬性名稱，注意用類似陣列的方括號語法
      return b[field] - a[field]
    })

  return newStudentArray
}

// 先以分行符號來取得多行陣列值
const rawDataArray = rawData.split('\n')

// 取代多餘的("")，然後分依逗號分取陣列值(連鎖語法)
const titleArray = rawDataArray[0].replaceAll('"', '').split(',')

// 標題的呈現部份
let titleDisplay = ''

for (let i = 0; i < titleArray.length; i++) {
  titleDisplay += `<th>${titleArray[i]}</th>`
}

titleDisplay = `<thead><tr>${titleDisplay}</tr></thead>`

// 學生資料內容呈現部份
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

// 第一次 - 呈現在網頁的table標記裡
data.innerHTML =
  titleDisplay + `<tbody>${displayStudentData(studentArray)}</tbody>`

search.addEventListener('click', function () {
  // 得到查詢字串是什麼
  //const nameSearchWord = searchWord.value

  // 過濾只需要姓名包含查詢字串
  const newStudentArray = studentArray.filter(function (value) {
    return value.name.includes(searchWord.value)
  })

  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})

sortAscMath.addEventListener('click', function () {
  const newStudentArray = sortStudentData(studentArray, 'math', 'asc')
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})

sortDescMath.addEventListener('click', function () {
  const newStudentArray = sortStudentData(studentArray, 'math', 'desc')
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})

sortAscChinese.addEventListener('click', function () {
  const newStudentArray = sortStudentData(studentArray, 'chinese', 'asc')
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})

sortDescChinese.addEventListener('click', function () {
  const newStudentArray = sortStudentData(studentArray, 'chinese', 'desc')
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})
