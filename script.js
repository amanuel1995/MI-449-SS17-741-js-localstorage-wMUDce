// JS to control the them of the page and keep count
var darkButton = document.getElementById('night')
var dayButton = document.getElementById('day')
var visitCount = document.getElementById('visit-count')
var count = window.localStorage.getItem('count')

// create functions to set the themes
function Bright () {
  themeChoice = 'day-theme'
  window.localStorage.setItem('class', themeChoice) // store on local storage
  document.body.setAttribute('class', themeChoice) // set attribute
};

function Dim () {
  themeChoice = 'night-theme'
  window.localStorage.setItem('class', themeChoice) // store on local storage
  document.body.setAttribute('class', themeChoice)
};

// get the theme choice from local storage
var themeChoice = window.localStorage.getItem('class')

if (themeChoice === null) {
  // set the theme on click using event listeners
  darkButton.addEventListener('click', Dim)
  dayButton.addEventListener('click', Bright)
} else {
  // else put back the previous theme
  document.body.setAttribute('class', themeChoice)
  window.localStorage.setItem('class', themeChoice) // keep value on local storage

  // allow user to change theme from last used theme
  darkButton.addEventListener('click', Dim)
  dayButton.addEventListener('click', Bright)
}

// Update visit count in the HTML body
if (count != null) {
  var updateCount = parseInt(window.localStorage.getItem('count'))
  updateCount++
  window.localStorage.setItem('count', updateCount) // store updated value
  visitCount.textContent = 'You have visited this page: ' + updateCount + ' times.'
} else {
  count = 1
  updateCount = 1
  visitCount.textContent = 'You have visited this page: ' + updateCount + ' times.'
  window.localStorage.setItem('count', updateCount) // store updated value
}
