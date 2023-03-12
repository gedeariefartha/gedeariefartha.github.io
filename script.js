const header = document.querySelector("header");
window.addEventListener("scroll", function(){
     header.classList.toggle("sticky", window.scrollY > 100)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
     menu.classList.toggle('bx-x');
     navlist.classList.toggle('open');
}

//email service

function sendMail(){
     var params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
     };

     const serviceID = "service_5i5xvra";
     const templateID = "template_zmhz7il"

     emailjs.send(serviceID, templateID, params)
     .then(
          res =>{
               document.getElementById("name").value = "";
               document.getElementById("email").value = "";
               document.getElementById("message").value = "";
               console.log(res);
               alert("youre message sent successfully")
          }
     )
     .catch((err) => console.log(err));
}
