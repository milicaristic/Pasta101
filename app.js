//read more function

function myFunction(btn,dots,more) {
    var dots = document.getElementById(dots);
    var moreText = document.getElementById(more);
    var btnText = document.getElementById(btn);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else { 
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
//MODAL

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("login");
console.log(btn);
var btn2=document.getElementById("login2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var users=[];
     var user={
         username:"Milica",
         password:"123"
     };
     var user1={
      username:"Milan",
      password:"111"
  };

 users.push(user1,user);
  
     //unosenje korisnika u localstorage
     console.log(users);
     
     localStorage.setItem("Users",JSON.stringify(users));


// When the user clicks on the button, open the modal
var signed=false;
btn.onclick = function() {
  if(signed){
    signout();
    return;
  }
  modal.style.display = "block";
     let key;
     for (let i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i)=="Users") {
       key = i;
        break;
      }
    }
    btn2.onclick= function(e){
      e.preventDefault();
          let name= document.getElementById("username").value;
          let password=document.getElementById("pw").value;
         
          users_des=JSON.parse(localStorage.getItem(localStorage.key(key)));
          let i=0;
          let ima= false;
          
          
          for (let i= 0; i < users_des.length; i++) {
            if(users_des[i].username==name && users_des[i].password==password){
              console.log("ima");
              ima=true;
              signIn(name);
              signed=true;
              span.click();
              document.querySelector('#login').innerHTML = 'LOG OUT';
              break; 
            }
            
          }
          if(ima==false){
            window.alert("Wrong username or password, try again");
          }
    }
  
//   modal.style.visibility = true;
}

var hello= document.getElementById("hello");


function signIn(name){
  hello.innerHTML+=name;
  hello.style.visibility = "visible";
  hello.style.fontSize = "50px";
  
}

function signout(){
  document.querySelector('#login').innerHTML = 'LOG IN';
  hello.style.visibility = "hidden";
  signed=false;
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}