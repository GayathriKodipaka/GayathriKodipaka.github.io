const txt =["Full Stack Developer","Ml enthusiast","Java Developer"];
let i=0;
function updatecuro()
{
    const c=document.querySelector(".caro-text");
    c.textContent=txt[i];
    i=(i+1)%txt.length;
}
updatecuro();
setInterval(updatecuro,3000);