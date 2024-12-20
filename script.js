// Dark Mode 
const DLText=document.querySelector("[data-DarkLight]");
const DLButton=document.querySelector("[btn-DLBtn]");
const DLImage=document.querySelector("[DLImg]");
const DarkContainers=document.querySelectorAll("[darkLight]");
const DarkContainerCheck=document.querySelector("[darkLight]");

initialPage();

DLButton.addEventListener('click',renderDarkLightElements);
function renderDarkLightElements(){
    if(!DarkContainerCheck.classList.contains("dark")){
        for(const el of DarkContainers){
            el.classList.add("dark");
        };
        DLText.textContent='Light';
        DLImage.setAttribute("src","assets/sun.png")
    }
    else{
        for(const el of DarkContainers){
            el.classList.remove("dark");
        };
        DLText.textContent='Dark';
        DLImage.setAttribute("src","assets/moon.png")
    }
    
}
// initial page

function initialPage(){
    const search=document.querySelector(".search");
    search.classList.add("active");
}
