const correctAnswers = ["B", "A", "B", "B"]

const form = document.querySelector('form')
const lastScoreDOM = document.querySelector('.lastScore')
const lastScoreDOMContainer = document.querySelector('.lastScore--container')
const scoreDOM = document.querySelector('.score')
const scoreDOMContainer = document.querySelector('.score--container')

let lastScoreJS = localStorage.getItem('last_score')

if(lastScoreJS) { //If there is something in memory it is going to show it.
  lastScoreDOM.textContent = `${lastScoreJS}%`
  lastScoreDOMContainer.style.display = 'flex'
}

form.addEventListener('submit', e => {
  e.preventDefault()
  
  let scoreJS = 0 //To reset the value of it everytime I do a submit

  let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
  
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      scoreJS += 25
    }
  })

  localStorage.setItem('last_score', scoreJS) //This way if the user does the test we will keep his last score
  lastScoreJS = localStorage.getItem('last_score')
  lastScoreDOM.textContent = `${lastScoreJS}%` //I also added this line right here because I want the DOM to be updated everytime we have a new last score which is everytime we do a submit
  lastScoreDOMContainer.style.display = 'flex'
  
  let scoreAnimated = 0 //everytime we do a submit, this value has to start from zero
  if(scoreAnimated === scoreJS) {
    scoreDOM.textContent = `${scoreAnimated}% 😞`
  }

  // I'm assigning setInterval as the value of the animateScore variable so the setInterval method get an id that I will use later to kill the process
  animateScore = setInterval(() => {
    //Using setInterval might not be very performance friendly, but I'm trying to get some practice with this method.
    if(scoreAnimated < scoreJS) {
      scoreAnimated++
      scoreDOM.textContent = `${scoreAnimated}%`
    } else {
      clearInterval(animateScore) //This way I can kill the process to keep performance on the website. I don't want this interval to be infinite
    }
  }, 20)
  scoreDOMContainer.style.display = 'flex'
  scoreDOM.scrollIntoView()
})
