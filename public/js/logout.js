// handles fetching the post request that will destroy the session data when the logout button is pressed on the main page

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