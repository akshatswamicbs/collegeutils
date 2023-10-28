// var rect=document.querySelector("#center");
// rect.addEventListener("mousemove",function(details){
//     var rectanglelocation=rect.getBoundingClientRect();
//     var insiderectval=details.clientX - rectanglelocation.left;

//     if(insiderectval<rectanglelocation.width/2){
//         var redcolor=gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,insiderectval);
//         gsap.to(rect,{
//             backgroundColor:`rgb(${redcolor},0,0)`,
//             ease:Power4,
//         });
//     }
//     else{
        
//     }
// })


let imgBox=document.getElementById("imgbox");
let qrtext=document.getElementById("qrtext");
let qrimage=document.getElementById("qrimage");


function generateQR(){
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value ;
    imgBox.classList.add("show-img");
}
















