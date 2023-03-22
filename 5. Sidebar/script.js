const toggle_button = document.querySelector(".sidebar-toggle");

const sidebar = document.querySelector(".sidebar");

const close_btn = document.querySelector(".close-btn");

console.log(toggle_button);
console.log(sidebar);
console.log(close_btn);

toggle_button.addEventListener("click", function(){
    sidebar.classList.add("show-sidebar");
})

close_btn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
})