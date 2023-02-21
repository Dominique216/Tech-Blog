const commentBtn = document.querySelectorAll('#comment-btn')

commentBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-type')
        console.log(id)
        document.location.replace(`/comment/${id}`)
    })
})


// const commentSection = document.querySelectorAll('#comment-section');
// const commentInsert = document.querySelectorAll('.comment-insert')

// // const postId = commentSection.forEach(section => {
// //     const id = section.getAttribute('data-type');
// //     console.log(id)
// // })
// // const commentId = commentInsert.forEach(comm => {
// //     console.log(comm.getAttribute('data-type'))
// // })

// for (let i = 0; i< commentInsert.length; i++) {
//     const commentId = commentInsert[i].getAttribute('data-type')
// } 
// for (let j = 0; j < commentSection.length; j++) {
//     const postId =  commentSection[j].getAttribute('data-type')
// }
