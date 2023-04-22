// adds functionality to the add comment button that will redirect the comment page of the post the user want to comment on

const commentBtn = document.querySelectorAll('#comment-btn')

commentBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-type')
        console.log(id)
        document.location.replace(`/comment/${id}`)
    })
})

// adds functionality to the view comments btn
const viewComments = document.querySelectorAll('#view-comments-btn');
const comments = document.querySelectorAll('#comment-section');

viewComments.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        e.preventDefault();
        comments.forEach(comment => {
            const btnId = btn.getAttribute('data-type');
            const commentId = comment.getAttribute('data-type');  
            if(btnId === commentId) {
                if(comment.classList.contains('d-none')) {
                    comment.classList.remove('d-none')
                } else {
                    comment.classList.add('d-none')
                }
            } 
        })

    })
})

const avatar = document.querySelectorAll('#avatar')
console.log(avatar[0].getAttribute('data-type'))

// const avatarFile = avatar.forEach(user => user.getAttribute('data-type'))
// console.log(avatarFile)
for(let i = 0; i < avatar.length; i++) {
    const avatarFile = avatar[i].getAttribute('data-type')
    // console.log(avatarFile)
    avatar[i].setAttribute('src', `/uploads/${avatarFile}`)
}

