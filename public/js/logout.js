const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const response = await fetch('/api/users/logout', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
    })   
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }         
})