class OpenButton{
  onClick() {
    const modal = new Modal()
    modal.style.display = 'block'
  }
}

// 定义按钮对应的装饰器
class Decorator {
  constructor (open_button) {
    this.open_button = open_button
  }

  onClick() {
    this.open_button.onClick()

  }

  changeButtonText() {
    const btn = document.getElementById('open')
    btn.innerHTML = '快去登录'
  }

  disableButton() {
    const btn = document.getElementById('open')
    btn.setAttribute('disabled', true)
  }

  changeButtonStatus() {
    this.changeButtonText()
    this.disableButton()
  }
}

const openButton = new OpenButton()
const decorator = new Decorator(openButton)

document.getElementById('open').addEventListener('click', function() {
  openModal()
  changeButtonStatus()
})