const loginBtn = document.getElementById('btn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password')
const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
const passwordRegex =  /^[A-Za-z0-9]\w{8,}$/;
const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
      if(passwordRegex.test(passwordInput.value) == true && emailRegex.test(emailInput.value) == true && nameRegex.test(nameInput.value) == true) {
          alert("Logado");
      }

      else if(passwordRegex.test(passwordInput.value) == false && emailRegex.test(emailInput.value) == false && nameRegex.test(nameInput.value) == false) {
          passwordInput.style.border = "2px solid red";
          emailInput.style.border = "2px solid red";
          nameInput.style.border = "2px solid red";
      }

      else if(passwordRegex.test(passwordInput.value) == true) {
        emailInput.style.border = "2px solid red";
        nameInput.style.border = "2px solid red";
      }
      
      else if(emailRegex.test(emailInput.value) == true) {
        nameInput.style.border = "2px solid red";
        passwordInput.style.border = "2px solid red";
      }

      else if(nameRegex.test(nameInput.value) == true) {
        emailInput.style.border = "2px solid red"
        passwordInput.style.border = "2px solid red";
      }

      console.log(nameRegex.test(nameInput.value));
      console.log(emailRegex.test(emailInput.value));
      console.log(passwordRegex.test(passwordInput.value));
  });
  
nameInput.addEventListener("click", () => {
    nameInput.style.border = "2px solid #2a425e";
    emailInput.style.border = "2px solid #2a425e";
    passwordInput.style.border = "2px solid #2a425e";
});

emailInput.addEventListener("click", () => {
    emailInput.style.border = "2px solid #2a425e";
});

passwordInput.addEventListener("click", () => {
    passwordInput.style.border = "2px solid #2a425e";
});


window.sr = ScrollReveal({ reset: true });

sr.reveal('.img-bk', {
    durantion: 1000
});

sr.reveal('.info-3', {
    durantion: 1000,
    rotate: {x: 0 , y: 1000 , z: 0}
});