const updateBtn = document.getElementById('add-post')
// adds functionality to the update post button by fetch the put request from the api routes
updateBtn.addEventListener('click', async (event) => {
    event.preventDefault()
    // grabs edited post data
    const newtitle = document.querySelector('#filled-title').value.trim()
    const newcontent = document.querySelector('#filled-content').value.trim()
    // if data-id is defined from the handlebars page grab it and set is as variable id
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id')
      // fetch request to api routes that sends the new info
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
        // redirects back to updated dashboard
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  })

// handles delete button function
  const deleteBtn = document.getElementById('delete-post')
  deleteBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    // grabs the data-id value
    if (e.target.hasAttribute('data-id')) {
        const id = e.target.getAttribute('data-id')
        // uses data-id variable from handles-bar page to delete the correct post
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