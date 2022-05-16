function erase() {
  document.getElementById('display').value = ''
}

function clickButton(button) {
  document.getElementById('display').value += button
}

function calculate() {
  var result = document.getElementById('display').value
  document.getElementById('display').value = eval(result)
}

function eraseLast() {
  document.getElementById('display').value 

}
