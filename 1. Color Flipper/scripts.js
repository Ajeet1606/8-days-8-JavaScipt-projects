
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener('click', function(){
    let random = "#";
    for (let index = 0; index < 6; index++) {
        random += hex[getRandomNumber()];
    }
    // console.log(random);
    document.body.style.backgroundColor = random;
    color.textContent = random;
});


const getRandomNumber = function(){
    return Math.floor(Math.random() * 10) % 16;
}