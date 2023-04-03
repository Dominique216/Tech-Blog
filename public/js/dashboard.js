
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

// sets the default value of the bio in the update form to the current bio
const defaultBio = document.getElementById('bio-text-update');
const defaultValueBio = defaultBio.getAttribute('data-value');
defaultBio.defaultValue = defaultValueBio; 

// sets the default value of the username in the update form to the current username
const defaultName = document.getElementById('username-update');
const defaultValueName = defaultName.getAttribute('data-value');
defaultName.defaultValue = defaultValueName; 

// will update user information in the databse
const handleUpdateUser = async (e) => {
    const username = document.getElementById('username-update').value.trim();
    const bioText = document.getElementById('bio-text-update').value.trim();
    const id = e.target.getAttribute('data-target')
    if(username && bioText) {
        const response = await fetch(`/api/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: username,
                bio: bioText 
            }), 
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.reload();
        } else {
            console.log(response)
            alert(response.statusText);
        }
    }
}

const updatebtn = document.getElementById('update-profile-submit')

updatebtn.addEventListener('click', (e) =>{
    e.preventDefault();
    handleUpdateUser(e);
})
// will add the bio the user inputs to the database
const handleAddBio = async (e) => {
    const bioText = document.getElementById('bio-text').value.trim();
    const id = e.target.getAttribute('data-target')
    if (bioText) {
        const response = await fetch(`/api/bio/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ bio: bioText }), 
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.reload();
        } else {
            console.log(response)
            alert(response.statusText);
        }
    }
}

const addBio = document.getElementById('add-bio-submit');

if(addBio) {
    addBio.addEventListener('click', (e) =>{
        e.preventDefault();
        handleAddBio(e);
    })
}
