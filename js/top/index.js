window.onload = function () {
  var click = document.getElementById("click")
  click.onclick = function () {
    // window.scrollTo=0
    if (document.documentElement.scrollTop > 0) {
      let interval = setInterval(function () {
        let instance = document.documentElement.scrollTop/5
        document.documentElement.scrollTop -= instance
        if (document.documentElement.scrollTop == 0) {
          clearInterval(interval)
        }
      }, 30)
    }
  } 
  window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop >= 500){
      click.style.display = "block"
    }else{
      click.style.display = "none"
    }
  })
}