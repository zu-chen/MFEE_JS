const calendar = document.getElementById('calendar')
const title = document.getElementById('title')

const calHeaders = ['日', '一', '二', '三', '四', '五', '六']

let tableHeader = ''
for (let i = 0; i < calHeaders.length; i++) {
  tableHeader += `<th>${calHeaders[i]}</th>`
}

calendar.innerHTML = `<thead><tr>${tableHeader}</tr></thead>`
