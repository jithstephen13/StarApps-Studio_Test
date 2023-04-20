let buttons=document.querySelectorAll('.colure_coose')
let imagtag=document.getElementById('Umbrella_img')
let blueumberlla="./Umbrella project assets//Blue umbrella.png"
let pinkumberlla="./Umbrella project assets//Pink umbrella.png"
let yellowumberlla="./Umbrella project assets//Yello umbrella.png"
let rotateimagtag=document.getElementById("Umbrella_img_rota")
let upload=document.getElementById("Upload_img")
let Umbrella_Logo_img=document.getElementById("Umbrella_Logo_img")
let logo_conta=document.getElementById("logo_conta")
let main=document.querySelector("main")
let imge_btn=document.getElementById("imge_btn")
  
for(let button of buttons){


    button.addEventListener("click",(e)=>{


                    let target=e.target

                    imagtag.style.display="none"
                    rotateimagtag.style.display="flex"

                                setTimeout(()=>{
                                    imagtag.style.display="flex"
                                rotateimagtag.style.display="none"
                                },1000)

                    let clor=target.getAttribute('data-color') 
                    document.querySelector(".active").classList.remove("active")

                        //  clolor blue
                    if(clor=="blue"){

                                setTimeout(()=>{
                                imagtag.style.display="flex"
                                rotateimagtag.style.display="none"
                                main.style.backgroundColor="#e6f6fc"
                            },1000)

                    imge_btn.style.backgroundColor="blue"
                    imagtag.src=blueumberlla
                    target.classList.add("active")
                    }
                            //  colore pink      
                    if(clor=="pink"){
                        imagtag.src=pinkumberlla
                        main.style.backgroundColor="#fffaed"

                        setTimeout(()=>{
                        imagtag.style.display="flex"
                        rotateimagtag.style.display="none"
                        },1000)

                        imge_btn.style.backgroundColor="red"
                        target.classList.add("active")
                    }

                            //  colore yellow
                    if(clor=="yellow"){

                        imagtag.src=yellowumberlla
                        main.style.backgroundColor="#fffaed"
                        imge_btn.style.backgroundColor="yellow"
                        target.classList.add("active")
                    }
     
   })
}


    //  Uploade button    
function UploadImgfun(){
    upload.click() 
}


// file input and convert that in to image src

function showType(fileInput) {

            const files = fileInput.files[0];
            Umbrella_Logo_img.style.display="block"
            logo_conta.style.display="block"
            Umbrella_Logo_img.src=URL.createObjectURL(files);

}