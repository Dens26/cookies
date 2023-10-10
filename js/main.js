// Date plus 24h
const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

// Ecouteur de formulaire
const form = document.querySelector("form");
form.addEventListener("submit", evt => {
    evt.preventDefault();
    createCookie(document.querySelector('#cookie-input-name').value, document.querySelector('#cookie-input-value').value)
}, false);

const toast = document.querySelector(".toast");
let cookieTab = [];
/*
  Fonction de création de cookies
*/
function createCookie(name, value) {
    // Récupération des cookies existant
    const cookieExist = doesExist(name);

    document.cookie = `${name}=${value};expired=${expirationDate};`;
    // Affichage du toast
    showToast(cookieExist, name);
}

function doesExist(name){
        // Récupération des cookies existant
        cookieTab = (document.cookie.replace(/\s/g, "")).split(';');
        const cookieName = cookieTab.map(cookie => cookie.split('=')[0]);

        return cookieName.find(cookie => cookie == name);;
}
/*
  Fonction de gestion de l'affichage du toast
*/
function showToast(cookieExist, name) {
    if (cookieExist == name) {
        toast.style.cssText = "display:block; background:red;";
        toast.textContent = "Cookie modifié";
    }
    else {
        toast.style.cssText = "display:block; background:green;";
        toast.textContent = "Cookie créé";
    }
    setTimeout(() => toast.style.cssText = "display:none;", 2000);
}

// Ecouteur du bouton Afficher
const ShowButton = document.querySelector(`.show-button`);
ShowButton.addEventListener("click",evt=>{
    createElements();
},false);

const cookieDisplay = document.querySelector(`.cookie-display`);
function createElements(){
    for(cookie of cookieTab){
        cookieDisplay.innerHTML += `
        <div class="cookie-display-group">
        <button class="cookie-display-btn">X</button>
        <p class="cookie-display-name">Nom : ${cookie.split('=')[0]}</p>
        <p class="cookie-display-value">Valeur : ${cookie.split('=')[1]}</p>
        </div>
        `;
    }
}












