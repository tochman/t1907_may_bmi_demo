
const selectorInput = document.getElementById('method')
const weightValueInput = document.getElementById('weight')
const heightValueInput = document.getElementById('height')
const displayResultElement = document.getElementById('results')
let method = 'metric'

selectorInput.addEventListener('change', () => {
  method = selectorInput.options[selectorInput.selectedIndex].value
  weightValueInput.value = ''
  heightValueInput.value = ''
  displayResultElement.innerHTML = ''
  if (method === 'imperial') {
    weightValueInput.placeholder = weightValueInput.placeholder.replace('kg', 'pounds')
    heightValueInput.placeholder = heightValueInput.placeholder.replace('meters', 'inches')

  } else {
    weightValueInput.placeholder = weightValueInput.placeholder.replace('pounds', 'kg')
    heightValueInput.placeholder = heightValueInput.placeholder.replace('inches', 'meters')
  }

})


const calculateBMI = () => {
  const displayResultElement = document.getElementById('results')
  const weightValue = weightValueInput.value
  const heightValue = heightValueInput.value
  method = selectorInput.options[selectorInput.selectedIndex].value
  
  let bmiValue
  if (method === 'imperial') {
    // calculate using imperial method
    bmiValue = calculateImperialMethod(weightValue, heightValue)
  } else {
    // calculate using metric method
    bmiValue = calculateMetricMethod(weightValue, heightValue)
  }
  
  displayResultElement.innerHTML = `Your BMI value is ${bmiValue.toFixed(2)} and you are ${getBmiMessage(bmiValue)} `
}