
// document.addEventListener('DOMContentLoaded', () => {

// })

const calculateBMI = () => {
  const displayResultElement = document.getElementById('results')
  const weightValue = document.getElementById('weight').value
  const heightValue = document.getElementById('height').value
  let bmiValue = weightValue / (heightValue * heightValue)
  displayResultElement.innerHTML = `Your BMI value is ${bmiValue}`
}