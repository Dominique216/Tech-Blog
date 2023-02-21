// handles fecthing the post request and sending the data that the user input in the comment card to it then relocating to the updated home page
const addBtn = document.querySelector('#add-comment')

addBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const content = document.getElementById('comment-content').value.trim()
    const postId = e.target.getAttribute('data-type')
    console.log('postId is ' + postId)
    if(content) {
        const response = await fetch('/api/comment', {
            method: 'POST', 
            body: JSON.stringify({ 
                content: content, 
                post_id: postId 
            }),
            headers: { 'Content-Type': 'application/json' },
        })   
        if (response.ok) {
            document.location.replace('/');
        } else {
        alert(response.statusText);
        }         
    }
})