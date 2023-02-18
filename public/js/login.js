
const loginBtn = document.getElementById('submit');

loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim()
    const password = document.getElementById('password').value.trim()

    if(name && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST', 
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        })   
        if (response.ok) {
            document.location.replace('/');
        } else {
        alert(response.statusText);
        }         
    }
})