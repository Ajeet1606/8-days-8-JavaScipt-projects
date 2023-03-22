// Build an array of menu objects.
const menu = [
    {
        title: "Buttermilk Pancakes",
        price: "$15.9",
        logo: "./Images/item-1.jpeg",
        type: "breakfast",
        info: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        title: "Diner Double",
        price: "$13.9",
        logo: "./Images/item-2.jpeg",
        type: "lunch",
        info: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
        title: "Godzilla Milkshake",
        price: "$6.9",
        logo: "./Images/item-3.jpeg",
        type: "shakes",
        info: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        title: "Country Delight",
        price: "$20.9",
        logo: "./Images/item-4.jpeg",
        type: "breakfast",
        info: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut"
    },
    {
        title: "Egg Attack",
        price: "$22.9",
        logo: "./Images/item-5.jpeg",
        type: "lunch",
        info: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    },
    {
        title: "Oreo Dream",
        price: "$42.9",
        logo: "./Images/item-6.jpeg",
        type: "shakes",
        info: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },
    {
        title: "Bacon Overflow",
        price: "$9.9",
        logo: "./Images/item-7.jpeg",
        type: "breakfast",
        info: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    },
    {
        title: "American Classic",
        price: "$12.9",
        logo: "./Images/item-8.jpeg",
        type: "lunch",
        info: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
    {
        title: "Quarantine Buddy",
        price: "$16.9",
        logo: "./Images/item-9.jpeg",
        type: "shakes",
        info: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
    {
        title: "Steak Dinner",
        price: "$10.5",
        logo: "./Images/item-10.jpeg",
        type: "dinner",
        info: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    }
];

// -----------------------------------------------------------------------------------------------------------

// Access the html elements needed.
const treat_info = document.querySelector(".treat-info");

// function showTreats() {

//     menu.forEach(function (item) {

//         const treats = document.createElement("div");
//         treats.className = "treats";
//         treats.id = item.type;

//         // Add image
//         // create div tag with class logo then create img tag for source.
//         const logo = document.createElement("div");
//         logo.className = "logo";
//         const img = document.createElement("img");
//         img.src = item.logo;
//         logo.appendChild(img);
//         treats.appendChild(logo);


//         //create details section
//         const details = document.createElement("div");
//         details.className = "details";
//         const short = document.createElement("div");
//         short.className = "short-ones";
//         const title = document.createElement("h4");
//         title.className = "title";

//         title.textContent = item.title;

//         const price = document.createElement("h4");
//         price.className = "price";

//         price.textContent = item.price;

//         short.appendChild(title);
//         short.appendChild(price);
//         details.appendChild(short);
//         details.appendChild(document.createElement("hr"));
//         const long = document.createElement("div");
//         long.className = "long-ones";
//         const info = document.createElement("p");
//         info.className = "info";

//         info.textContent = item.info;

//         long.appendChild(info);
//         details.appendChild(long);

//         treats.appendChild(details);

//         treat_info.appendChild(treats);

//     })
//     return;
// }


function showTreats(){
    let eachTreat = menu.map(function(item){
        return `
        <div class="treats" id=${item.type}>
            <div class="logo">
                <img src= ${item.logo} alt="food-img">
            </div>
            <div class="details">
                <div class="short-ones">
                    <h4 class="title">${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                </div>
                <hr>
                <div class="long-ones">
                    <p class="info">${item.info}</p>
                </div>
            </div>
        </div>`;
    })
    eachTreat = eachTreat.join("");
    treat_info.innerHTML = eachTreat;
}


function showSelectedTreats(type) {
    const treats = document.querySelectorAll(".treats");

    treats.forEach(function (current) {
        if (type == "all") {
            current.style.display = "flex";
        }
        else if (current.id != type) {
            current.style.display = "none";
        } else {
            current.style.display = "flex";
        }
    })
}


const sections = document.querySelector(".sections");

sections.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const choosen_type = event.target.className;
        console.log(choosen_type);
        //show only this type of treats.
        showSelectedTreats(choosen_type);
    }
})


window.onload(showTreats());
