function submitForm(event) {
    event.preventDefault();
    
    let button = document.getElementById("submitButton");
    let form = document.getElementById("loginForm");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (!button || !form) {
        console.error("Elemento não encontrado");
        return;
    }
    
    console.log("Formulário enviado:", { username, password });
    
    button.innerHTML = "Carregando...";
    button.disabled = true;
    
    setTimeout(() => {
        alert("Formulário enviado com sucesso!");
        form.reset();
        button.innerHTML = "SUBMIT";
        button.disabled = false;
        window.location.href = "index.html";
    }, 2000);
}
    