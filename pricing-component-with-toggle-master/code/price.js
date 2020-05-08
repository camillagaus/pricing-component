const annuallyFirst = document.getElementById('annually-first')
const annuallySecond = document.getElementById('annually-second')
const annuallyThird = document.getElementById('annually-third')
const monthlyFirst = document.getElementById('monthly-first')
const monthlySecond = document.getElementById('monthly-second')
const monthlyThird = document.getElementById('monthly-third')
const switchPrice = document.getElementById('switch')


const changeToMonth = () => {
  if (switchPrice.checked) {
    annuallyFirst.style.display = 'block'
    annuallySecond.style.display = 'block'
    annuallyThird.style.display = 'block'

    monthlyFirst.style.display = 'none'
    monthlySecond.style.display = 'none'
    monthlyThird.style.display = 'none'
  } else {
    annuallyFirst.style.display = 'none'
    annuallySecond.style.display = 'none'
    annuallyThird.style.display = 'none'
    monthlyFirst.style.display = 'block'
    monthlySecond.style.display = 'block'
    monthlyThird.style.display = 'block'
  }
 
}


