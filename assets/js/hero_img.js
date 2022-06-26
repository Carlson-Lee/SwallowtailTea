//have dataset//
let slide_hero_image = Array.from(document.querySelectorAll(".slide_hero_image"));
let hero_bg_contents = Array.from(document.querySelectorAll(".hero_bg_contents"));
let header_link = Array.from(document.querySelectorAll(".header_link"));

let elements1 = document.querySelectorAll('[data-index]');



header_link.forEach(link => {
link.addEventListener("mouseenter", mouseEnter);
link.addEventListener("mouseleave", mouseLeave);
});
function mouseEnter()
    {
        //console.log(header_link[i],slide_hero_image[i],hero_bg_contents[i]);
 
        for(i=0; i<header_link.length;i++){
            if(i != 0){
                console.log("no");
                if(i = 1)
                {
                    console.log("YEs no2");
                    document.querySelector(".slide_hero_image").classList.add("active");
                    document.querySelector(".hero_bg_contents").classList.add("active");
                }
                if(i = 2)
                {
                    document.querySelector(".slide_hero_image").classList.remove("active");
                    document.querySelector(".hero_bg_contents").classList.remove("active");
                    document.querySelector(".slide_hero_image").classList.add("active");
                    document.querySelector(".hero_bg_contents").classList.add("active");
                }
                else{
                    console.log("nested else")
                    document.querySelector(".slide_hero_image").classList.remove("active");
                    document.querySelector(".hero_bg_contents").classList.remove("active");
                }
                
                console.log("1st else");
            }

            //console.log(i);
        }

    }    

//(header_link[0] == slide_hero_image[0]) && (slide_hero_image[0] == hero_bg_contents[0]) && (header_link[0] == hero_bg_contents[0])
//(header_link[i] != slide_hero_image[i]) && (slide_hero_image[i] != hero_bg_contents[i]) && (header_link[i] != hero_bg_contents[i])
//             if(header_link[1] && slide_hero_image[1] && hero_bg_contents[1])
//             {
//                 console.log("enter 1");
//                 document.querySelector(".hero_bg_contents").classList.remove("active");
//                 document.querySelector(".slide_hero_image").classList.add("active");
//                 document.querySelector(".hero_bg_contents").classList.add("active");
//             }
 

//             if(header_link[2] && slide_hero_image[2] && hero_bg_contents[2])
//             {
//                 console.log("enter 2");
//                 document.querySelector(".hero_bg_contents").classList.remove("active");
//                 document.querySelector(".slide_hero_image").classList.add("active");
//                 document.querySelector(".hero_bg_contents").classList.add("active");
//             }




//                 document.querySelector(".hero_bg_contents").classList.remove("active");


// }

        
function mouseLeave(l)
{
    console.log("mouse Leave!")
    document.querySelector(".slide_hero_image").classList.remove("active");
    document.querySelector(".hero_bg_contents").classList.remove("active");
}

// switch(m)
// {

//     case 1:
//         if(header_link[0] && slide_hero_image[0] && hero_bg_contents[0])
//         {
            
//             document.querySelector(".slide_hero_image").classList.add("active");
//             document.querySelector(".hero_bg_contents").classList.add("active");
//         }
//     break;
    
//     case 2:
//         if(header_link[1] && slide_hero_image[1] && hero_bg_contents[1])
//         {
//             console.log("enter 1");
//             document.querySelector(".hero_bg_contents").classList.remove("active");
//             document.querySelector(".slide_hero_image").classList.add("active");
//             document.querySelector(".hero_bg_contents").classList.add("active");
//         }
//     break;
    
//     case 3:
//         if(header_link[2] && slide_hero_image[2] && hero_bg_contents[2])
//         {
//             console.log("enter 2");
//             document.querySelector(".hero_bg_contents").classList.remove("active");
//             document.querySelector(".slide_hero_image").classList.add("active");
//             document.querySelector(".hero_bg_contents").classList.add("active");
//         }
//     break;

//     default:
//         {
//             document.querySelector(".hero_bg_contents").classList.remove("active");
//         }
// }








    //start of the function//
   

        // document.querySelector(".slide_hero_image").classList.add("active");
        // document.querySelector(".hero_bg_contents").classList.add("active");

        // if(header_link[0] = slide_hero_image[0] && hero_bg_contents[0])
        //     {
        //         document.querySelector(".slide_hero_image").classList.add("active");
        //         document.querySelector(".hero_bg_contents").classList.add("active");
        //     }





// if(header_link[1] = slide_hero_image[1] && hero_bg_contents[1])
// {
//     document.querySelector(".slide_hero_image").classList.add("active");
//     document.querySelector(".hero_bg_contents").classList.add("active");
// }

// if(header_link[2] = slide_hero_image[2] && hero_bg_contents[2])
// {
//     document.querySelector(".slide_hero_image").classList.add("active");
//     document.querySelector(".hero_bg_contents").classList.add("active");
// }








// elements1.forEach(div => {

//     if(div.dataset.index == "0")
//     {
//         console.log("hello 0");
//         document.querySelector(".slide_hero_image").classList.add("active");
//     }
//     if(div.dataset.index == "1")
//     {
//         console.log("hello 1")
//         document.querySelector(".slide_hero_image").classList.add("active");
//     }
//     if(div.dataset.index == "2")
//     {
//         console.log("hello 2")
//         document.querySelector(".slide_hero_image").classList.add("active");
//     }
// })









// header_link.forEach(link => {
//     //console.log(link);

// });
    
    // document.querySelector(".header_link").addEventListener("click", e => {
    //     console.log("hello")
    //     console.log(e.target);
    //     e.target.querySelectorAll(".slide_hero_image").classList.toggle("active");
    //     let slide_hero_image = document.querySelectorAll(".slide_hero_image");
    //     console.log(e.target);
    // })



// elements1.forEach(div => {
//     console.log(div.dataset.index)
//         if(div.dataset.index === "0"){
//             console.log("hello");
//             innerHTML.document.querySelector(".slide_hero_image").classList.toggle("active");
//             innerHTML.document.querySelector(".hero_bg_contents").classList.toggle("active");
//         }  
// })
    //header_link.addEventListener("mouseenter", active);
    //console.log(mouseEnter);
  




// slide_hero_image.forEach(div => {
//     console.log(div);
//     forEach(indexs => {
        
//     })

//     header_link.addEventListener("mouseenter", activate);
// });



// let activate = () => {
//     let active = (slide_hero_image.dataset.index === '0');
//     if(active = !active)

     //this changes the attribute
     //slide_hero_image.setAttribute('data-index', '1');
//     console.log(activate);
// }





