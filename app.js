document.addEventListener('DOMContentLoaded', () => {
   //card options
   const cardArray= [
    {
        name: 'cat',
         img: 'images/cat.png',
    }, 
    {
        name: 'cat',
         img: 'images/cat.png',
    },
    {
        name: 'bird',
         img: 'images/bird.png',
    },
    {
        name: 'bird',
         img: 'images/bird.png',
    },
    {
        name: 'fish',
         img: 'images/fish.png',
    },
    {
        name: 'fish',
         img: 'images/fish.png',
    },
    {
        name: 'horse',
         img: 'images/horse.png',
    },
    {
        name: 'horse',
         img: 'images/horse.png',
    },
    {
        name: 'monkey',
         img: 'images/monkey.png',
    },
    {
        name: 'monkey',
         img: 'images/monkey.png',
    },
    {
        name: 'dog',
         img: 'images/dog.png',
    },
    {
        name: 'dog',
         img: 'images/dog.png',
    },
]


cardArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardChosen = []
var cardChosenId = []
var cardsWon = []

// creat your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/abstract.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if (cardChosen[0] === cardChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        //cards[optionOneId].removeEventListener('click', flipCard)
        //cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    }else {
        cards[optionOneId].setAttribute('src', 'images/abstract.png')
        cards[optionTwoId].setAttribute('src', 'images/abstract.png')
    }
    cardChosen = []
    cardChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You win' 
    }

}


//flip your card
function flipCard() {
var cardId = this.getAttribute('data-id')
cardChosen.push(cardArray[cardId].name)
cardChosenId.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if (cardChosen.length === 2 ){
    setTimeout(checkForMatch, 500)
}
}


createBoard()

})