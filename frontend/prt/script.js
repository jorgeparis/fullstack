const header = document.querySelector("header");

header.addEventListener("click", (e) => {
  console.log("I was clicked",e.target);
  header.style.backgroundImage=`${'./bg_header_2'}`
},false);
