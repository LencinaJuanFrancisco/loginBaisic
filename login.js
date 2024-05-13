document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    let emailInput = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let passInput = document.getElementById('password')
    let email = emailInput.value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.textContent = "Ingrese un correo valido.";
        emailInput.focus();
        return;
    } else {
        emailError.textContent = "";
    }

    
    console.log("Logueado" + " email --> " + emailInput.value +" Id --> "+ passInput.value);
});
