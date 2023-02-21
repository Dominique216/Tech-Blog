//when add post button is clekced on the dashboard it will redirect to the newpost page 
document.querySelector('#add-post').addEventListener('click', () => {
    document.location.replace('/newpost')
})


// when any of the post buttons on the bashboard are clicked they will redirect to the edit post page 
const postBtn = document.querySelectorAll('.post-btn')

postBtn.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    const id = btn.getAttribute('data-type')
    console.log(id)
    document.location.replace(`/editpost/${id}`)
}))