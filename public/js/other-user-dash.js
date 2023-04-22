const avatar = document.getElementById('avatar')

const avatarFile = avatar.getAttribute('data-type')
console.log(avatarFile)

avatar.setAttribute('src', `/uploads/${avatarFile}`)