

const searchBar = document.getElementById('search-bar');

const usersList = searchBar.getAttribute('data-options')
const usersArr = usersList.replaceAll(",", " ").split(" ")
const users = document.querySelectorAll('.users');
console.log(users);

const findUser = (value) => {
    for(let i = 0; i < users.length; i++) {
        if(users[i].dataset.userName == value) {
           users[i].classList.add('card');
           const userAvatar = document.createElement('img');
           userAvatar.setAttribute('src', `/uploads/${users[i].dataset.userImage}`)
           userAvatar.classList.add('rounded-circle')
           userAvatar.style.width = '150px'
           userAvatar.style.height = '150px'
           userAvatar.classList.add('mx-auto')
           userAvatar.classList.add('my-3')
          const userName = `${users[i].dataset.userName}`
          const userNameText = document.createElement('h5')
          userNameText.textContent = userName;
          const viewProfileBtn = document.createElement('button')
          // btn btn-outline-info mb-5 mx-5
          const hrefForBtn = document.createElement('a')
          hrefForBtn.setAttribute('href', `/dashboard/${parseInt(users[i].dataset.id) + 1}`)
          viewProfileBtn.classList.add('btn')
          viewProfileBtn.classList.add('btn-outline-info')
          viewProfileBtn.textContent = 'View Profile'
          viewProfileBtn.classList.add('m-2')
          // viewProfileBtn.setAttribute('')
          hrefForBtn.appendChild(viewProfileBtn)
          // viewProfileBtn.classList.add()
           users[i].appendChild(userAvatar); 
           users[i].appendChild(userNameText)
           users[i].appendChild(hrefForBtn)

           
        }
    }
}


// console.log(allUserNames)
// console.log(users.getAttribute('data-user-name'))


// handles the autocomplete functionality
const autocomplete = (inp, arr) => {
    var currentFocus;
    
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        
        this.parentNode.appendChild(a);
        
        for (i = 0; i < arr.length; i++) {
          
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            
            b = document.createElement("DIV");
            
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
           
                b.addEventListener("click", function(e) {
                
                inp.value = this.getElementsByTagName("input")[0].value;
                
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          
          currentFocus++;
          
          addActive(x);
        } else if (e.keyCode == 38) { 
          
          currentFocus--;
          
          addActive(x);
        } else if (e.keyCode == 13) {
          
          e.preventDefault();
          if (currentFocus > -1) {
            
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      
      if (!x) return false;
      
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    } 
  }
 
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

autocomplete(searchBar, usersArr);


document.getElementById('search-btn').addEventListener('click', async (e) => {
    e.preventDefault();
    const userSearched = searchBar.value;
       findUser(userSearched)     
})

console.log(searchBar)

