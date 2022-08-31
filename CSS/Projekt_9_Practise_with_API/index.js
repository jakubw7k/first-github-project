// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const userListEl = document.querySelector(".user-list")
console.log(userListEl)

async function main() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users"); //wait for the fetch, its a backend request 1x await
    const usersData = await users.json(); //wait to convert backend to the frontend 2x await
    userListEl.innerHTML = usersData.map((user) => userHTML(user)).join(""); //Join um Array zum String zu konvertrieren, da map ein Array zurückgibt
    console.log(userListEl)
}

main();

function showUSerPost(id)
{
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/CSS/Projekt_9_Practise_with_API/user.html`
    console.log(id);
}
function userHTML(user){
    return `<div class="user-card" onclick="showUSerPost(${user.id})">
    <div class="user-card__container">
        <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p> 
    </div>
    </div>`;
     // "https://" hinzufügen bei href
}