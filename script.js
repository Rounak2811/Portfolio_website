const navDialog=document.getElementById('Menubar');

function HandleMenu(){
    navDialog.classList.toggle("hidden")
}

function disappear(){
    const ele=document.getElementById("home-section")
    ele.addEventListener("click",()=>{
        console.log("Rounak");
        navDialog.classList.toggle("hidden")
    })
    const ele1=document.getElementById("about-sec")
    ele1.addEventListener("click",()=>{
        console.log("Rounak");
        navDialog.classList.toggle("hidden")
    })
    const ele2=document.getElementById("project-sec")
    ele2.addEventListener("click",()=>{
        console.log("Rounak");
        navDialog.classList.toggle("hidden")
    })
    const ele3=document.getElementById("contact-sec")
    ele3.addEventListener("click",()=>{
        console.log("Rounak");
        navDialog.classList.toggle("hidden")
    })

}