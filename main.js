// console.log('salom')
const cardMainHard = document.querySelector('.card-main-container')
const cardMainCont = document.querySelector('.card-container')
const cardRight = document.querySelector('.card-right')
const cardRightTop = document.querySelector('.card-right-top')
const cardRightTopImg = document.querySelector('.card-right-top-img-wrapper')
const cardRightTopImgRes = document.querySelector('.card-rigth-top-img')
const cardRightTopHeaading = document.querySelector('.card-right-top-heading')
const cardRightTopBottomInfo = document.querySelector('.card-right-bottom-info')
const cardLeft = document.querySelector('.card-left')
const cardLeftTop = document.querySelector('.card-left-top')
const cardLeftBottom = document.querySelector('.card-left-bottom')





const API_URL = 'https://dummyjson.com/users'

async function fetchData(api) {
    let data = await fetch(api)
    data
        .json()
        .then((response) => createCard(response))
        .catch((error) => console.log(error))
}

console.log(fetchData(API_URL))

function createCard(data) {
    data.users.forEach(item => {

        const cardMainContItem = document.createElement('div')
        cardMainContItem.className = 'card-container'
        const cardRightItem = document.createElement('div')
        cardRightItem.className = 'card-right'
        const cardRightTopItem = document.createElement('div')
        cardRightTopItem.className = 'card-right-top'
        const cardRightTopHeaadingItem = document.createElement('h2')
        cardRightTopHeaadingItem.className = 'card-right-top-heading'
        const cardRightTopImgItem = document.createElement('div')
        cardRightTopImgItem.className = 'card-right-top-img-wrapper'
        const cardRightTopImgItemImg = document.createElement('img')
        cardRightTopImgItemImg.className = 'card-rigth-top-img'
        const cardRightTopBottomInfoItem = document.createElement('div')
        cardRightTopBottomInfoItem.className = 'card-right-bottom-info'
        const cardRightTopBottomInfoItemPrep = document.createElement('p')
        cardRightTopBottomInfoItemPrep.className = 'card-right-bottom-info-deck-wrapper-prep'
        const cardRightTopBottomInfoItemHead2 = document.createElement('h2')
        cardRightTopBottomInfoItemHead2.className = 'card-right-bottom-info-deck-wrapper-prep'
        const cardRightTopBottomInfoItemHead3 = document.createElement('h3')
        cardRightTopBottomInfoItemHead3.className = 'card-right-bottom-info-deck-wrapper-prep'
        const cardRightTopBottomInfoItemHead4 = document.createElement('h4')
        cardRightTopBottomInfoItemHead4.className = 'card-right-bottom-info-deck-wrapper-prep'
        const cardRightTopBottomInfoItemHead5 = document.createElement('h5')
        cardRightTopBottomInfoItemHead5.className = 'card-right-bottom-info-deck-wrapper-prep'
        const cardLeftItem = document.createElement('div')
        cardLeftItem.className = 'card-left'
        const cardLeftTopItem = document.createElement('div')
        cardLeftTopItem.className = 'card-left-top'
        const cardLeftBottomItem = document.createElement('div')
        cardLeftBottomItem.className = 'card-left-bottom'
        const cardLeftBottomLeft = document.createElement('div')
        cardLeftBottomLeft.className = 'card-left-bottom-left'
        const cardLeftBottomRight = document.createElement('div')
        cardLeftBottomRight.className = 'card-left-bottom-right'
        const cardLeftBottomLefthead2 = document.createElement('h2')
        cardLeftBottomLefthead2.className = 'card-left-bottom-deck'
        const cardLeftBottomLefthead3 = document.createElement('h2')
        cardLeftBottomLefthead3.className = 'card-left-bottom-deck'
        const cardLeftBottomLefthead4 = document.createElement('h2')
        cardLeftBottomLefthead4.className = 'card-left-bottom-deck'
        const cardLeftBottomLefthead5 = document.createElement('h2')
        cardLeftBottomLefthead5.className = 'card-left-bottom-deck'
        const cardLeftBottomRighthead2 = document.createElement('h2')
        cardLeftBottomRighthead2.className = 'card-left-bottom-deck'
        const cardLeftBottomRighthead3 = document.createElement('h2')
        cardLeftBottomRighthead3.className = 'card-left-bottom-deck'
        const cardLeftBottomRighthead4 = document.createElement('h2')
        cardLeftBottomRighthead4.className = 'card-left-bottom-deck'
        const cardLeftBottomRighthead5 = document.createElement('h2')
        cardLeftBottomRighthead5.className = 'card-left-bottom-deck'

        cardLeftBottomRighthead5.textContent = `eye Color :: ${item.eyeColor}`
        cardLeftBottomRighthead4.textContent = `lastName :: ${item.lastName}`
        cardLeftBottomRighthead3.textContent = `Weight :: ${item.weight} kg`
        cardLeftBottomRighthead2.textContent = `Height :: ${item.height}`



        cardLeftBottomLefthead2.textContent = `Phone :: ${item.phone}`
        cardLeftBottomLefthead3.textContent = `Password :: ${item.password}`
        cardLeftBottomLefthead4.textContent = `ssn :: ${item.ssn}`
        cardLeftBottomLefthead5.textContent = `ein :: ${item.ein}`



        cardRightTopBottomInfoItemPrep.textContent = `Age :: ${item.age}`
        cardRightTopBottomInfoItemHead2.textContent = `BirthDate :: ${item.birthDate}`
        cardRightTopBottomInfoItemHead3.textContent = `City :: ${item.address.city}`
        cardRightTopBottomInfoItemHead4.textContent = `Adress :: ${item.address.address}`
        cardRightTopBottomInfoItemHead5.textContent = `Email :: ${item.email} `
        console.log(item)



        cardLeftTopItem.innerHTML = ` <p class="card-left-top-deck">That s what I want.It will be so.Henry Ford
        Poor, unhappy, unhappy and unhealthy people are the ones who often use the word "tomorrow".Robert Kiyosaki
        I am not defeated.I found 10,000 ways that didn't work. Thomas Edison
        There are at most two important days in everyone's life: the first is when he is born, and the second is when he realizes why. William Barclay
        Your well - being depends on your decisions.John Rockefeller.
        A lucky person is a person who does what others want to do.Jules Renard.
        To achieve the goal, you need to go first.Honore de Balzac
        Everyone knows that this is impossible.But here comes a fool who does not know this - then he makes a discovery Albert Einstein</p > `












        cardRightTopImgItemImg.setAttribute('src', item.image)
        cardRightTopHeaadingItem.textContent = item.firstName



        cardRightTopItem.appendChild(cardRightTopHeaadingItem)
        cardRightTopImgItem.appendChild(cardRightTopImgItemImg)
        cardRightTopItem.appendChild(cardRightTopImgItem)

        cardRightTopBottomInfoItem.appendChild(cardRightTopBottomInfoItemPrep)
        cardRightTopBottomInfoItem.appendChild(cardRightTopBottomInfoItemHead2)
        cardRightTopBottomInfoItem.appendChild(cardRightTopBottomInfoItemHead3)
        cardRightTopBottomInfoItem.appendChild(cardRightTopBottomInfoItemHead4)
        cardRightTopBottomInfoItem.appendChild(cardRightTopBottomInfoItemHead5)
        cardRightTopItem.appendChild(cardRightTopBottomInfoItem)
        cardRightItem.appendChild(cardRightTopItem)
        cardMainContItem.appendChild(cardRightItem)
        cardLeftItem.appendChild(cardLeftTopItem)
        cardLeftItem.appendChild(cardLeftBottomItem)
        cardLeftBottomItem.appendChild(cardLeftBottomLeft)
        cardLeftBottomItem.appendChild(cardLeftBottomRight)
        cardLeftBottomLeft.appendChild(cardLeftBottomLefthead2)
        cardLeftBottomLeft.appendChild(cardLeftBottomLefthead3)
        cardLeftBottomLeft.appendChild(cardLeftBottomLefthead4)
        cardLeftBottomLeft.appendChild(cardLeftBottomLefthead5)
        cardLeftBottomRight.appendChild(cardLeftBottomRighthead2)
        cardLeftBottomRight.appendChild(cardLeftBottomRighthead3)
        cardLeftBottomRight.appendChild(cardLeftBottomRighthead4)
        cardLeftBottomRight.appendChild(cardLeftBottomRighthead5)
        cardMainContItem.appendChild(cardLeftItem)
        cardMainHard.appendChild(cardMainContItem)

        // console.log(item)
    })
}



