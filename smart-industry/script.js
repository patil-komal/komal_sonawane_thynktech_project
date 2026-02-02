// ========= DATA =========
const industry4 = [
  { title:"IoT", desc:"Connected smart devices" },
  { title:"AI", desc:"Automation and prediction" },
  { title:"Big Data", desc:"Data driven decisions" }
];

const industry5 = [
  { title:"Human + Robot", desc:"Collaboration systems" },
  { title:"Sustainability", desc:"Eco friendly production" },
  { title:"Personalization", desc:"Custom solutions" }
];

// ========= RENDER FUNCTION =========
function renderCards(id,data){
  const box=document.getElementById(id);
  if(!box) return;

  data.forEach(item=>{
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=`<h3>${item.title}</h3><p>${item.desc}</p>`;
    card.onclick=()=>openModal(item);
    box.appendChild(card);
  });
}

renderCards("i4Cards",industry4);
renderCards("i5Cards",industry5);

// ========= MODAL =========
const modal=document.getElementById("modal");
const mTitle=document.getElementById("mTitle");
const mDesc=document.getElementById("mDesc");

function openModal(item){
  modal.style.display="flex";
  mTitle.textContent=item.title;
  mDesc.textContent=item.desc;
}

function closeModal(){
  modal.style.display="none";
}

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
},{threshold:0.2});

document.querySelectorAll(".card").forEach(card=>{
  observer.observe(card);
});

const search=document.getElementById("search");
if(search){
  search.addEventListener("input",e=>{
    const value=e.target.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card=>{
      card.style.display =
        card.textContent.toLowerCase().includes(value) ? "block" : "none";
    });
  });
}

document.querySelectorAll("nav a").forEach(link=>{
  if(link.href === location.href){
    link.classList.add("active");
  }
});

const themeBtn = document.getElementById("themeToggle");

// load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

// toggle theme
themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("light");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

