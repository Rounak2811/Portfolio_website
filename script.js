const navDialog=document.getElementById('Menubar');

const bars=document.getElementById('bars');
const xmark=document.getElementById('xmark');

function HandleMenu(){
    navDialog.classList.toggle("hidden");
}
bars.addEventListener('click',()=>{
    bars.classList.toggle("hidden");
    xmark.classList.toggle("hidden");
})
xmark.addEventListener('click',()=>{
    xmark.classList.toggle("hidden");
    bars.classList.toggle("hidden");
})





const elements=document.querySelectorAll('.hideMenu');
elements.forEach(element=>{
    element.addEventListener('click',()=>{
        navDialog.classList.toggle("hidden");
        if(!xmark.classList.contains("hidden")){
            xmark.classList.add("hidden");
        }
        if(bars.classList.contains("hidden")){
            bars.classList.toggle("hidden");
        }
    })
});
