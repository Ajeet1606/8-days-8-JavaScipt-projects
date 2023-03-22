let count = 0;


/*
//fetch the buttons by their id to set event listener
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

//fetch the counter address, to update it's value according to button clicks.
const counter_address = document.querySelector(".counter");

//add event listener to increase button.
increase.addEventListener("click", function(){
    count++;
    counter_address.textContent = count;
    updateColor();
})

//add event listener to reset button.
reset.addEventListener("click", function(){
    count = 0;
    counter_address.textContent = count;
    updateColor();
})

//add event listener to decrease button.
decrease.addEventListener("click", function(){
    count--;
    counter_address.textContent = count;
    updateColor();
})
*/


// ------------------------------------------Another optimised method----------------------------------------------

//fetch the counter address, to update it's value according to button clicks.
const counter_address = document.querySelector(".counter");

//we have 3 buttons, get access to all of them.
const buttons = document.querySelectorAll(".btn")
// console.log(buttons);

//for each button
buttons.forEach(function(btn){
    //we're adding click listener on them.
    btn.addEventListener("click", function(e){
        //get id of current target button.
        const id_of_clicked_button = e.currentTarget.id;
        // console.log(id_of_clicked_button);
        
        if(id_of_clicked_button == "decrease"){
            count--;
            counter_address.textContent = count;
        }else if(id_of_clicked_button == "increase"){
            count++;
            counter_address.textContent = count;
        }else{
            count = 0;
            counter_address.textContent = count;
        }

        updateColor();
    })
})

function updateColor(){
    if(count > 0){
        counter_address.style.color = "Green";
    }else if(count < 0){
        counter_address.style.color = "Red";
    }else{
        counter_address.style.color = "Black";
    }
    return;
}