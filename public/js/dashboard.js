document.querySelector('#add-post').addEventListener('click', () => {
    document.location.replace('/newpost')
})



const postBtn = document.querySelectorAll('.post-btn')

// postBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.location.replace('/editpost')
//     // send them to a page that will look like thenewpost screen but the infor from the post is already there
// })


postBtn.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    const id = btn.getAttribute('data-type')
    console.log(id)
    document.location.replace(`/editpost/${id}`)
    // if (e.target.hasAttribute('data-id')) {
    //     const id = e.target.getAttribute('data-id')
    //     document.location.replace(`/editpost/${id}`) 
    // }
   
    // send them to a page that will look like thenewpost screen but the infor from the post is already there
}))
// const updatePost = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id')
  
//       const response = await fetch(`/api/post/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//           score: playerScore
//         }), 
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       if (response.ok) {
//         document.location.reload();
//       } else {
//         alert('Failed to update score');
//       }
//     }
//   };