const nav = document.getElementById('nav')
const footer = document.getElementById('footer')



fetch('./navbar.html')
  .then(response => response.text())
  .then(data => {
    nav.innerHTML = data
  })
fetch('./footer.html')
  .then(response => response.text())
  .then(data => {
    footer.innerHTML = data
  })



document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Get the form data
  var formData = new FormData(this);
  console.log(formData.get("name"));

  // Send the email using EmailJS
  //   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
  // emailjs.send("service_9928928", "template_e4xr72t", {
  emailjs.send("service_cbhz645", "template_hh53gjh", {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  })
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
      // Display a success message to the user
      alert("Message sent successfully!");
      // Reset the form
      document.getElementById("contact-form").reset();
    }, function (error) {
      console.log("FAILED...", error);
      // Display an error message to the user
      alert("Failed to send message. Please try again.");
    });
});



const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const img = document.getElementById('img');
const dotsContainer = document.getElementById('dots');

const images = [
  '/images/products/1.jpeg',
  '/images/products/2.jpeg',
  '/images/products/3.jpeg',
  '/images/products/4.jpeg'
];

let idx = 0;

function updateCarousel() {
  img.src = images[idx];
  updateDots();
}

function updateDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('div');
    dot.className = `dot ${i === idx ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      idx = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }
}

prevBtn.addEventListener('click', () => {
  idx--;
  if (idx < 0) {
    idx = images.length - 1;
  }
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  idx++;
  if (idx > images.length - 1) {
    idx = 0;
  }
  updateCarousel();
});

updateCarousel();
