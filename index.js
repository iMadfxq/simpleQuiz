const correctAnswers = ["B", "A", "B", "B"]

const form = document.querySelector('form')
const scoreDOM = document.querySelector('.score')
const scoreDOMContainer = document.querySelector('.score--container')

form.addEventListener('submit', e => {
  e.preventDefault()
  
  let scoreJS = 0 //To reset the value of it everytime I do a submit

  let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
  
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      scoreJS += 25
    }
  })

  scoreDOM.scrollIntoView()

  let scoreAnimated = 0 //everytime we do a submit, this value has to start from zero
  let animateScore
  setTimeout(() => { // I'm putting it all inside a setTimeOut because I want to give some time for the scroll animation on line 19 to be executed.

    // I'm assigning setInterval as the value of the animateScore variable so the setInterval method get an id that I will use later to kill the process
    animateScore = setInterval(() => {
      //Using setInterval might not be very performance friendly, but I'm trying to get some practice with this method.
      if(scoreAnimated < scoreJS) {
        scoreAnimated++
        scoreDOM.textContent = scoreAnimated
      } else {
        clearInterval(animateScore) //This way I can kill the process to keep performance on the website. I don't want this interval to be infinite
      }
    }, 20)
  scoreDOMContainer.style.display = 'flex'
  }, 1000);
})
