const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')

// for(let i=2010; i>1909; i--){ }

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
