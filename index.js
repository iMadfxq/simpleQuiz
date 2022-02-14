const correctAnswers = ["B", "A", "B", "B"]

const form = document.querySelector('form')

form.addEventListener('submit', e => {
  e.preventDefault()
  
  let score = 0

  let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
  
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 25
    }
  })
  let scoreShown = 0
  setInterval(() => {
    if(scoreShown < score) {
      scoreShown++
      console.log(scoreShown)
    }
  }, 50);
})