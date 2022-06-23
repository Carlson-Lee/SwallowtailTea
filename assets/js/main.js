let header_link = document.querySelector(".header_link");
let nav_header_t = document.querySelector(".nav_header_t");

console.log(header_link);
console.log(nav_header_t);

header_link.addEventListener("mouseenter", mouseEnter);
nav_header_t.addEventListener("mouseenter", hover_t);

fetch('https://api.unsplash.com/search/photos?query=tea-leafs&client_id=c3p_40xZo67k-Vhy73WXyrVOF_dBByjLqznqOtmT9dY')
    .then(response => response.json())
    .then(image => {
        let randomNumb = Math.floor(Math.random() * 9);
        let pics = image["results"][randomNumb];
        //console.log(pics);
        document.body.style.backgroundImage = `url(${pics.urls.regular})`;
    })


/* hover effect only working in the first of div in rotation menu*/
function mouseEnter() {
    console.log("Working!");
    header_link.classList.toggle("active");
}   

/* hover effect only working in the first of div in menus */
function hover_t() {
    console.log("txt_works");
}
