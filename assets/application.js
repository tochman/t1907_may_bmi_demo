
const selectorInput = document.getElementById('method')
const weightValueInput = document.getElementById('weight')
const heightValueInput = document.getElementById('height')
const displayResultElement = document.getElementById('results')
const KG_TO_POUND_MODIFIER = 2.20462262185
const CM_TO_INCHES_MODIFIER = 0.0254
let method = 'metric'

selectorInput.addEventListener('change', () => {
  method = selectorInput.options[selectorInput.selectedIndex].value
  displayResultElement.innerHTML = ''
  if (method === 'imperial') {
    if (weightValueInput.value) {
      let weightInPounds = weightValueInput.value * KG_TO_POUND_MODIFIER
      let heightInInches = heightValueInput.value / CM_TO_INCHES_MODIFIER
      weightValueInput.value = weightInPounds.toFixed(2)
      heightValueInput.value = heightInInches.toFixed(2)
    }
    weightValueInput.placeholder = weightValueInput.placeholder.replace('kg', 'pounds')
    heightValueInput.placeholder = heightValueInput.placeholder.replace('meters', 'inches')

  } else {
    if (weightValueInput && weightValueInput.value) {
      let weightInPounds = weightValueInput.value * KG_TO_POUND_MODIFIER
      weightValueInput.value = weightInPounds
    }
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