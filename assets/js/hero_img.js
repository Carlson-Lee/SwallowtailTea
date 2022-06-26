let header_link = document.querySelectorAll(".header_link");

//Iterate through the class and name them link//
header_link.forEach(link => {
    let id = link.id;
    //this is the action listener, when any link is being hovered this will trigger//
    link.addEventListener("mouseenter", mouseEnter);

    //call the function i name my mouseEnter//
    function mouseEnter(){
        //selecting each image by thier class name//
        let three_piles = document.querySelector("#three_piles");
        let green_hill = document.querySelector("#green_hill");
        let cups = document.querySelector("#cups");
        //selecting each content message by thier class name//
        let content_sip = document.querySelector("#content_sip");
        let content_wp = document.querySelector("#content_wp");
        let content_bsh = document.querySelector("#content_bsh");

        /*on mouse hover, i compared the image's id with the header's id
        if they dont match, remove the image and content message's class*/ 
        if(three_piles.id != link.id){
            document.querySelector(".three_piles").classList.remove("active");
            document.querySelector(".content_sip").classList.remove("active");
        }
        //if they are a match, add the active class on the image and content message//
        else
        {
            document.querySelector(".three_piles").classList.add("active");
            document.querySelector(".content_sip").classList.add("active");
            
        }

        if(green_hill.id != link.id){
            document.querySelector(".green_hill").classList.remove("active");
            document.querySelector(".content_wp").classList.remove("active");
        }
        else
        {
            document.querySelector(".green_hill").classList.add("active");
            document.querySelector(".content_wp").classList.add("active");
        }

        if(cups.id != link.id){
            document.querySelector(".cups").classList.remove("active");
            document.querySelector(".content_bsh").classList.remove("active");
        }
        else
        {
            document.querySelector(".cups").classList.add("active");
            document.querySelector(".content_bsh").classList.add("active");
        }
    }
    //this set's the first background image on page load// 
    document.querySelector(".three_piles").classList.add("active");
});





