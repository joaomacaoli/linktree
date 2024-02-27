function toggleMode() {
    // const body = document.body;
    const html = document.documentElement
    html.classList.toggle('light')

    const image = document.querySelector('#profile img')

    const imageLight = './assets/avatar-light.png'
    const imageDark = './assets/avatar.png'

    html.classList.contains('light')
        ? image.setAttribute('src', imageLight)
        : image.setAttribute('src', imageDark)


}