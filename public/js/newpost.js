// handles fetching the post request to create a new post to the database when the add post button is pressed on the newpost page
const addBtn = document.querySelector('#add-post')

addBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const title = document.getElementById('post-title').value.trim()
    const content = document.getElementById('post-content').value.trim()
    const id = e.target.getAttribute('data-target')
    if(title && content) {
        const response = await fetch('/api/post', {
            method: 'POST', 
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        })   
        if (response.ok) {
            document.location.replace(`/dashboard/${id}`);
        } else {
        alert(response.statusText);
        }         
    }
})