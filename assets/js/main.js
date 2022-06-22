fetch('https://api.unsplash.com/search/photos?query=tea-leafs&client_id=c3p_40xZo67k-Vhy73WXyrVOF_dBByjLqznqOtmT9dY')
.then(response => response.json())
.then(image => {
    let randomNumb = Math.floor(Math.random() * 999);
    console.log(randomNumb);

    console.log(image["results"]);

    image["results"].forEach(img => {
        console.log(img["urls"]);

        function randomCheck(a,b){
            return randomNumb.join() == img.join();
        }
        console.log(randomCheck(a,b));

        document.body.style.backgroundImage = `url(${img.urls.regular})`;
    })

})

