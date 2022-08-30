const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated")[0].classList.add("fadeIn")
      document.querySelectorAll(".animated")[1].classList.add("fadeInRight")
      document.querySelectorAll(".animated")[2].classList.add("fadeInRight")
      document.querySelectorAll(".animated")[3].classList.add("fadeInRight")
    }
  })
})

observer.observe(document.querySelector(".experience-container"))