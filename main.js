const link = document.querySelectorAll('.link')
const text = document.querySelectorAll('.text')
const arrayNow = []
let cont = 0

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', () => {
    if (link[i].classList != 'link active') {
      link[0].classList.remove('active')
      text[0].classList.remove('active')
      
      link[i].classList.add('active')
      text[i].classList.add('active')
      
      arrayNow.push([i] * 1)

      cont++
 
      if (cont > 1) {
        link[arrayNow[arrayNow.length-2]].classList.remove('active')
        text[arrayNow[arrayNow.length-2]].classList.remove('active')
      }
    }
  }) 
}