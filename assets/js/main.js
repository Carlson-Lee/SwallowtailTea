//const { response } = require("express");

//paragraph change//
let background_banner = document.querySelector(".background_temp");

//document.querySelectorAll("header_link").addEventListener("hover", background_banner(){
    

//})

fetch('https://api.unsplash.com/search/photos?query=tea-leafs&client_id=c3p_40xZo67k-Vhy73WXyrVOF_dBByjLqznqOtmT9dY')
.then(response => response.json())
.then(image => {
    //let randomNumb = Math.floor(Math.random() * 999);
    let numb = 1;
    console.log(randomNumb);
    console.log(image);

    if(numb === image[0]){
        let img = document.createElement("div");
        img.classList.add("unsplash_img")
        img.innerHTML = image
    }

    
})
background_banner.append(image);
