// JS to control the them of the page and keep count
var darkButton = document.getElementById('night')
var dayButton = document.getElementById('day')
var visitCount = document.getElementById('visit-count')
var count = window.localStorage.getItem('count') || 0

// create functions to set the themes
function Bright () {
  themeChoice = 'day-theme'
  window.localStorage.setItem('class', themeChoice) // store on local storage
  document.body.setAttribute('class', themeChoice) // set attribute
}

function Dim () {
  themeChoice = 'night-theme'
  window.localStorage.setItem('class', themeChoice) // store on local storage
  document.body.setAttribute('class', themeChoice)
}

// get the theme choice from local storage
var themeChoice = window.localStorage.getItem('class')

if (themeChoice === null) {
  window.localStorage.setItem('class', 'body-theme') // reset the theme to original
} else {
  // else put back the previous theme
  document.body.setAttribute('class', themeChoice)
  window.localStorage.setItem('class', themeChoice) // keep value on local storage
}

// set the theme on click using event listeners
darkButton.addEventListener('click', Dim)
dayButton.addEventListener('click', Bright)

// Update visit count in the HTML body
if (count !== null) {
  count = parseInt(count) + 1
}
visitCount.textContent = 'You have visited this page: ' + count + ' times.'
window.localStorage.setItem('count', count) // store updated value
