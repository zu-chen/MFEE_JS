// poker函式庫產生卡片圖形的參數
// 參考：https://tairraos.github.io/Poker.JS/#chinese-version-readme
// size  - 牌的象素高度。牌的宽高比固定为3:4。缺省值为200。
// suit  - 牌面花色。取值大小写不敏感，必须为下列[]内的值之一：
//         ['h', 'hearts', 'd', 'diamonds', 's', 'spades', 'c', 'clubs']
//         值对应红桃，方块，黑桃，梅花, 'h', 'd', 's', 'c' 是缩略写法
//         当牌面点数为'JOKER'时，红桃和方块表示牌为大王；黑桃和梅花表示牌为小王。
//         缺省值为'h'
// point - 牌面点数。取值大小写不敏感，必须为下列[]内的值之一：
//         ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'O', 'JOKER']
//         'O'(字母O)是'JOKER'的缩略写法
//         缺省值为'O'
const desk = document.getElementById('desk')
const pointTotal = document.getElementById('pointTotal')
const message = document.getElementById('message')
const deal = document.getElementById('deal')

// 建立每張牌的物件值的工廠函式
// point 1-13
function createCard(suit, point) {
  let img = null

  switch (point) {
    case 1:
      img = Poker.getCardImage(60, suit, 'A')
      break
    case 11:
      img = Poker.getCardImage(60, suit, 'J')
      break
    case 12:
      img = Poker.getCardImage(60, suit, 'Q')
      break
    case 13:
      img = Poker.getCardImage(60, suit, 'K')
      break
    default:
      img = Poker.getCardImage(60, suit, point)
      break
  }

  return { suit, point, img }
}

function shuffleArray(inputArray) {
  const array = [...inputArray]

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

// 宣告準要要一副牌加入卡片的陣列
const cards = []

// 目前發到哪張牌的索引值
let cardIndex = 0

// 記錄目前牌桌上的總點數
let total = 0

// 花色用的對應陣列
const suitArray = ['h', 'd', 's', 'c']

// 產生一整副牌的物件值
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 13; j++) {
    cards.push(createCard(suitArray[i], j + 1))
  }
}

// 洗過的牌組
const shuffleCards = shuffleArray(cards)

console.log(shuffleCards)

deal.addEventListener('click', function () {
  // 先取出目前的卡牌資訊
  const cardNow = { ...shuffleCards[cardIndex] }

  // 超過10點算半點(0.5)，加到總點數中
  total += cardNow.point > 10 ? 0.5 : cardNow.point

  // 呈現總點數
  pointTotal.innerHTML = '總點數：' + total + ' 點'

  // 加入新發的卡牌圖片
  desk.appendChild(cardNow.img)

  // 判斷是否爆了(超過10.5點)
  if (total > 10.5) {
    message.innerHTML = '爆了'
  }

  // 每發一張牌，卡牌陣列索引值+1
  cardIndex += 1
})
