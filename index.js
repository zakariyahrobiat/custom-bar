bar = document.querySelector(".bar");
percentage = document.getElementById("percentage")

setTimeout (() =>{
bar.style.width = bar.getAttribute("data-done") + "%";
bar.style.opacity = "1";
percentage.innerText =  bar.getAttribute("data-done") + "%"
})