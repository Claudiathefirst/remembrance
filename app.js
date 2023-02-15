document.addEventListener('DOMContentLoaded', ()=>{

    //cards
    const deck = [
        {
            name: '21',
            img: 'assets/culture/21.png'
        },
        {
            name: '21',
            img: 'assets/culture/21.png'
        },
        {
            name: '22',
            img: 'assets/culture/22.png'
        },
        {
            name: '22',
            img: 'assets/culture/22.png'
        },
        {
            name: '23',
            img: 'assets/culture/23.png'
        },
        {
            name: '23',
            img: 'assets/culture/23.png'
        },
        {
            name: '24',
            img: 'assets/culture/24.png'
        },

        {
            name: '24',
            img: 'assets/culture/24.png'
        },
        {
            name: '25',
            img: 'assets/culture/25.png'
        },
        {
            name: '25',
            img: 'assets/culture/25.png'
        },
        {
            name: '26',
            img: 'assets/culture/26.png'
        },
        {
            name: '26',
            img: 'assets/culture/26.png'
        },
        {
            name: '27',
            img: 'assets/culture/27.png'
        },
        {
            name: '27',
            img: 'assets/culture/27.png'
        },
        {
            name: '28',
            img: 'assets/culture/28.png'
        },
        {
            name: '28',
            img: 'assets/culture/28.png'
        },
        {
            name: '29',
            img: 'assets/culture/29.png'
        },
        {
            name: '29',
            img: 'assets/culture/29.png'
        },
        {
            name: '30',
            img: 'assets/culture/30.png'
        },
        {
            name: '30',
            img: 'assets/culture/30.png'
        },
        {
            name: '31',
            img: 'assets/culture/31.png'
        },
        
        {
            name: '31',
            img: 'assets/culture/31.png'
        },
        {
            name: '32',
            img: 'assets/culture/32.png'
        },
        
        {
            name: '32',
            img: 'assets/culture/32.png'
        },
        {
            name: '33',
            img: 'assets/culture/33.png'
        },
        {
            name: '33',
            img: 'assets/culture/33.png'
        },
        {
            name: '34',
            img: 'assets/culture/34.png'
        },
        
        {
            name: '34',
            img: 'assets/culture/34.png'
        },
        {
            name: '35',
            img: 'assets/culture/35.png'
        },
        {
            name: '35',
            img: 'assets/culture/35.png'
        },
        {
            name: '36',
            img: 'assets/culture/36.png'
        },
        
        {
            name: '36',
            img: 'assets/culture/36.png'
        },
        {
            name: '37',
            img: 'assets/culture/37.png'
        },
        {
            name: '37',
            img: 'assets/culture/37.png'
        },
        {
            name: '38',
            img: 'assets/culture/38.png'
        },
        {
            name: '38',
            img: 'assets/culture/38.png'
        },
       
    ]
    deck.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const scoreDisplay = document.querySelector('#result')
  let cardsSelected = []
  let cardsSelectedId = []
  let cardsMatched = []

  //create your board
  function createBoard() {
    for (let i = 0; i < deck.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'assets/culture/19.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function compareCards() {
    const cards = document.querySelectorAll('img')
    const firstCardId = cardsSelectedId[0]
    const secondCardId = cardsSelectedId[1]
    
    if(firstCardId == secondCardId) {
      cards[firstCardId].setAttribute('src', 'assets/culture/19.png')
      cards[secondCardId].setAttribute('src', 'assets/culture/19.png')
      alert('You ain\'t gotta dial the number twice 🛑')
    }
    else if (cardsSelected[0] === cardsSelected[1]) {
      alert('Tens, tens, tens across the board! 👏🏾👏🏾👏🏾')
      cards[firstCardId].setAttribute('src', 'assets/culture/20.png')
      cards[secondCardId].setAttribute('src', 'assets/culture/20.png')
      cards[firstCardId].removeEventListener('click', flipCard)
      cards[secondCardId].removeEventListener('click', flipCard)
      cardsMatched.push(cardsSelected)
    } else {
      cards[firstCardId].setAttribute('src', 'assets/culture/19.png')
      cards[secondCardId].setAttribute('src', 'assets/culture/19.png')
      alert('Dust yourself off and try again 🥹')
    }
    cardsSelected = []
    cardsSelectedId = []
    scoreDisplay.textContent = cardsMatched.length
    if  (cardsMatched.length === deck.length/2) {
      scoreDisplay.textContent = 'You\'re a god, you\'re a hero, You survived all you been through! 🔥'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsSelected.push(deck[cardId].name)
    cardsSelectedId.push(cardId)
    this.setAttribute('src', deck[cardId].img)
    if (cardsSelected.length ===2) {
      setTimeout(compareCards, 500)
    }
  }

  createBoard()
})
