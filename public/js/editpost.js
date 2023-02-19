const updateBtn = document.getElementById('add-post')

updateBtn.addEventListener('click', async (event) => {
    event.preventDefault()
    const newtitle = document.querySelector('#filled-title').value.trim()
    const newcontent = document.querySelector('#filled-content').value.trim()
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id')
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ 
            title: newtitle, 
            content: newcontent
         }), 
        headers: {
            'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  })

  const deleteBtn = document.getElementById('delete-post')
  deleteBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.hasAttribute('data-id')) {
        const id = e.target.getAttribute('data-id')
    
        const response = await fetch(`/api/post/delete/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete post');
        }
      }
  })