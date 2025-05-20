



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

// modal //
const modal = document.getElementById("modal");
const openBtns = document.querySelectorAll(".open-modal");
const closeBtn = document.getElementById("close-modal");

openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }
});

// fim modal //

// animação modal//

openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden", "hide");
    modal.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hide");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300); // espera terminar a animação
});

// fim animação modal //

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