const element_full_btn = document.querySelector('.full_screen')

element_full_btn.addEventListener('click', event => {

  if(event.target.classList.contains('fa-expand')) {
    // Full screen code
    elem = document.documentElement
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }

    // normalize steps
    event.target.title = 'Exit ' + event.target.title
    event.target.classList.remove('fa-expand')
    event.target.classList.add('fa-compress')
    
  } else if (event.target.classList.contains('fa-compress')) {
    // Exit Full screen code
    elem = document.documentElement
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }

    // normalize steps
    event.target.title = event.target.title.slice(5)
    event.target.classList.add('fa-expand')
    event.target.classList.remove('fa-compress')
  } 
})
