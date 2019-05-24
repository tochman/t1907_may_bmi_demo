const getBmiMessage = (bmiValue) => {
  if (bmiValue < 18.5) {
    return "Underweight"
  } else if (bmiValue > 18.5 && bmiValue < 25) {
    return "Healthy"
  } else if (bmiValue > 25 && bmiValue < 30) {
    return "Overweight"
  } else if (bmiValue > 30) {
    return "Obese"
  }
}

const calculateMetricMethod = (weightValue, heightValue) => {
  const value = weightValue / (heightValue * heightValue)
  return value
}

const calculateImperialMethod = (weightValue, heightValue) => {
  const value = (weightValue * 703) / (heightValue * heightValue)
  return value
}