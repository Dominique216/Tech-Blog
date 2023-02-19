const commentBtn = document.querySelectorAll('#comment-btn')

commentBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-type')
        console.log(id)
        document.location.replace(`/comment/${id}`)
    })
})