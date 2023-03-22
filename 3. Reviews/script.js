const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];


//get access to image, name, job, info to update them dynamically.
const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const random = document.querySelector(".random-btn");
console.log(random);
let current_position = 0;
const total_reviews = reviews.length;

//the one to show on page at first.
window.onload = changeValues();



// ----------------------------------------------Method 1------------------------------------------------
// const prev = document.querySelector(".fa-chevron-left");
// const next = document.querySelector(".fa-chevron-right");

// //apply click listener to buttons.

// prev.addEventListener("click", function(){
//     current_position = (current_position - 1 + total_reviews)%total_reviews;
//     changeValues();
// })

// next.addEventListener("click", function(){
//     current_position = (current_position + 1) % total_reviews;
//     changeValues();
// })


//--------------------------------------------Method 2---------------------------------------------------

const buttons = document.querySelectorAll(".btn-container");

buttons.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const clicked_btn = e.currentTarget.id;

        if(clicked_btn == "prev"){
            current_position = (current_position - 1 + total_reviews)%total_reviews;
        }else{
            current_position = (current_position + 1) % total_reviews;
        }
        changeValues();
    })
})

random.addEventListener("click", function(){
    let pos = Math.floor(Math.random() * 10) % total_reviews;
    // console.log(pos);
    current_position = pos;
    changeValues();
})

function changeValues(){
    image.src = reviews[current_position].img;
    author.textContent = reviews[current_position].name;
    job.textContent = reviews[current_position].job;
    info.textContent = reviews[current_position].text;
}