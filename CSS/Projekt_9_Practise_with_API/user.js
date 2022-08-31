const postListEl = document.querySelector('.post-list')
const id = localStorage.getItem("id")

async function onSearchChange(event) {
    const id = (event.target.value)
    renderPosts(id)
}

async function renderPosts(id) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();
    postListEl.innerHTML = postsData.map(post => postHTML(post)).join(''); //postsData.map(post =>  bedeutet so viel wie wir mappen über jeden Objekt von postsData und für jedes Element (aktuelles Element) "post" machen wir:
}

function postHTML(post) {
    return `<div class="post">
     <div class="post__title">
       ${post.title}
     </div>
     <p class="post__body">
       ${post.body}
     </p>
   </div>` //Join um Array zum String zu konvertrieren, da map ein Array zurückgibt
}

renderPosts(id);