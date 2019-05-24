const getBmiMessage = (bmiValue) => {
  if (bmiValue < 18.5) {
    return "Underweight"
  } else if (bmiValue > 18.5 && bmiValue < 25) {
    return "Healthy"
  } else if (bmiValue > 25 && bmiValue < 30) {
    return "Overweight"
  } else if (bmiValue > 30) {
    return "Oese"
  }
}

const calculateMetricBmi = (weightValue, heightValue) => {
  const value = weightValue / (heightValue * heightValue)
  return value
}

const calculateBMI = () => {
  const displayResultElement = document.getElementById('results')
  const weightValue = document.getElementById('weight').value
  const heightValue = document.getElementById('height').value
  let bmiValue = calculateMetricBmi(weightValue, heightValue)
  displayResultElement.innerHTML = `Your BMI value is ${bmiValue.toFixed(2)} and you are ${getBmiMessage(bmiValue)} `
}