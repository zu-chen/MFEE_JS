const desk = document.getElementById('desk')

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
desk.appendChild(Poker.getCardImage(60, 'h', 'q'))
