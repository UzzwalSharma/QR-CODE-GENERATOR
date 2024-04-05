const base_url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

const btn=document.querySelector("#btn")
const input=document.querySelector("input")
const img=document.querySelector("#img")
const p= document.querySelector("#p")

 function qr() {
    img.src=`${base_url}+${input.value}`
   
    
}

btn.addEventListener("click",()=>{
    qr(input.value);
    img.style.display= "visibility: visible";
    p.innerText="QR CODE IS GENERATED"
})