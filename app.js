
//memory card
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

//whack a mole

const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
  square.forEach(className => {
      className.classList.remove('mole')
  })  
  let randomPosition = square[Math.floor(Math.random() * 8)]
  randomPosition.classList.add('mole')

  //assign the id of randomPosition to hit position for us to use later
  hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
     if(id.id === hitPosition) {
         result = result + 1
         score.textContent = result
         
     }   
    })
})

function moveMole() {
   let timerId = null
   timerId = setInterval(randomSquare, 1000)  
}

moveMole()

function countDown() {
    currentTime --
    timeLeft.textContent = currentTime
  
    if(currentTime === 0 ) {
      clearInterval(timerId)
      alert('GAME OVER! Your final score is ' + result)
    }
  }
  
  let timerId = setInterval(countDown, 1000)
