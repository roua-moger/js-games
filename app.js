document.addEventListener('DOMContentLoaded', () => {
   //card options
   const cardArray= [
    {
        name: 'cat',
         img: 'image/cat.png',
    }, 
    {
        name: 'cat',
         img: 'image/cat.png',
    },
    {
        name: 'bird',
         img: 'image/bird.png',
    },
    {
        name: 'bird',
         img: 'image/bird.png',
    },
    {
        name: 'fish',
         img: 'image/fish.png',
    },
    {
        name: 'fish',
         img: 'image/fish.png',
    },
    {
        name: 'horse',
         img: 'image/horse.png',
    },
    {
        name: 'horse',
         img: 'image/horse.png',
    },
    {
        name: 'monkey',
         img: 'image/monkey.png',
    },
    {
        name: 'monkey',
         img: 'image/monkey.png',
    },
    {
        name: 'dog',
         img: 'image/dog.png',
    },
    {
        name: 'dog',
         img: 'image/dog.png',
    },
]

const grid = document.querySelector('.grid')

// creat your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/abstract.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//check for matches

//flip your card

createBoard()

})