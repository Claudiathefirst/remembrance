document.addEventListener('DOMContentLoaded', ()=>{

    //cards
    const cards = [
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
            img: 'assets/culture/301.png'
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
    const grid = document.querySelector('.grid')
    //create board
    function board() {
        for(let idx = 0; idx < cards.length; idx++ ){
            let card = document.createElement('img')
            card.setAttribute('src','assets/culture/19.png' )
            card.setAttribute('data-id', idx)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)
            
        }
    }
    board()


})