let send = document.getElementById('send')
let parent = document.getElementById('content-items')

send.addEventListener('click', function() {
  // console.log(1111)
  let li = document.createElement('li')
  li.setAttribute('class', 'content-item')

  let divPic = document.createElement('div')
  divPic.setAttribute('class', 'pic')
  li.appendChild(divPic)

  let img = document.createElement('img')
  img.setAttribute('src', './images/user.jpg')
  divPic.appendChild(img)

  let divMes = document.createElement('div')
  divMes.setAttribute('class', 'message')
  li.appendChild(divMes)

  let pName = document.createElement('p')
  pName.setAttribute('class', 'name')
  let pNameTxt = document.createTextNode('蜗牛')
  pName.appendChild(pNameTxt)
  divMes.appendChild(pName)

  let pdetail = document.createElement('p')
  pdetail.setAttribute('class', 'detail')
  let pdetailTxt = document.createTextNode('明天一起去爬山')
  pdetail.appendChild(pdetailTxt)
  divMes.appendChild(pdetail)

  parent.appendChild(li)

  console.log(li)
})