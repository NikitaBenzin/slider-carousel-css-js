const imageList = document.querySelector('.image-list')
const imageItems = document.querySelectorAll('.image-item')
const slideButtons = document.querySelectorAll('.slide-button')

const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth

slideButtons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.id === "prev-slide" ? -1 : 1
    const scrollAmount = imageList.clientWidth * direction
    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
  })
})

imageList.addEventListener("scroll", () => {
  slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex"
  slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft - 100 ? "none" : "flex"
})