const fetchImgs = async () => {
  const response = await fetch("https://api.imgflip.com/get_memes")
  const data = await response.json()
  const {memes} = await data.data
  
  return memes
}

const handleSubmit = async (event) => {
  event.preventDefault()
  const memes = await fetchImgs()
  const randNum = Math.floor(Math.random() * memes.length)
  const randMemeImg = memes[randNum].url
  img.src = randMemeImg
}

// console.log(fetchImgs()
//   .then(res => console.log(res[1])))

const topTextInput = document.querySelector('.inputTop')
const bottomTextInput = document.querySelector('.inputBottom')
const submitButton = document.querySelector('.submit')
const img = document.querySelector('img')
const topText = document.querySelector('.top');
const bottomText = document.querySelector('.bottom')

topTextInput.addEventListener('keyup', (e) => {
  topText.textContent = e.target.value
})

bottomTextInput.addEventListener('keyup', (e) => {
  bottomText.textContent = e.target.value
})

submitButton.addEventListener('click', handleSubmit)