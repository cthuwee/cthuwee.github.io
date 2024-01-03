const nav = document.getElementById('nav')
const footer = document.getElementById('footer')



fetch('../navbar.html')
  .then(response => response.text())
  .then(data => {
    nav.innerHTML = data
  })
fetch('../footer.html')
  .then(response => response.text())
  .then(data => {
    footer.innerHTML = data
  })

