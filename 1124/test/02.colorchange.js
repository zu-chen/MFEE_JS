const result = document.getElementById('result')
const add = document.getElementById('add')
const sub = document.getElementById('sub')


//錯誤寫法,寫在這只能加一次減一次
// const newResult = +result.innerHTML
add.addEventListener('click',function(){
    const newResult = +result.innerHTML
    result.innerHTML= newResult + 1
    //錯誤寫法
    //newResult++
})

sub.addEventListener('click',function(){
    const newResult = +result.innerHTML
    result.innerHTML= newResult - 1
    //錯誤寫法
    //newResult-=1
})