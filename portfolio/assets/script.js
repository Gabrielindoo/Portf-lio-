



var header           = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content          = document.getElementById('content');
var showSidebar      = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
       
    }
    else
    {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar()
{
    if(showSidebar)
    {
        showSidebar = true;
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && showSidebar) 
    {  
        showSidebar = true;
        toggleSidebar();
    }
});


window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && showSidebar) 
    {  
        showSidebar = true;
        toggleSidebar();
    }
});


//back to top//

const backBtn = document.querySelector("#Back-to-top")

window.addEventListener("scroll",function(){
    const ScrollTop = window.pageYOffset || this.document.documentElement.ScrollTop
    if(ScrollTop > 800){
        backBtn.style.display = "block"
    }
    else{
        backBtn.style.display = "none"
    }
})

backBtn.addEventListener("click", function (e){
    e.preventDefault()

    window.scrollTo({
            top:0,
        behavior:"smooth"
        }
    )
})