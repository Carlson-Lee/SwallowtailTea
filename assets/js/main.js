fetch('https://api.unsplash.com/search/photos?query=tea-leafs&client_id=c3p_40xZo67k-Vhy73WXyrVOF_dBByjLqznqOtmT9dY')
    .then(response => response.json())
    .then(image => {
        let randomNumb = Math.floor(Math.random() * 9);
        //console.log(image["results"][3]);

        let pics = image["results"][randomNumb];
        console.log(pics);

        document.body.style.backgroundImage = `url(${pics.urls.regular})`;

    })

