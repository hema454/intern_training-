// ======================
// Dark Mode
// ======================


const darkBtn = document.getElementById("darkBtn");


darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        darkBtn.innerHTML = "☀️ Light Mode";

    }
    else{

        darkBtn.innerHTML = "🌙 Dark Mode";

    }

});





// ======================
// Add Skills Dynamically
// ======================


const input = document.getElementById("itemInput");

const addBtn = document.getElementById("addBtn");

const itemList = document.getElementById("itemList");



let items = [];



addBtn.addEventListener("click", () => {


    const value = input.value.trim();


    if(value !== ""){


        items.push(value);


        renderItems();


        input.value = "";


    }


});





function renderItems(){


    itemList.innerHTML = "";


    items.forEach((item) => {


        const li = document.createElement("li");


        li.textContent = item;


        itemList.appendChild(li);


    });


}








// ======================
// Random Quote API
// ======================


const quoteBtn = document.getElementById("quoteBtn");

const quoteData = document.getElementById("quoteData");



quoteBtn.addEventListener("click", () => {


    fetch("https://dummyjson.com/quotes/random")


    .then(response => response.json())


    .then(data => {


        quoteData.innerHTML = `


        <p>
        "${data.quote}"
        </p>


        <h4>
        - ${data.author}
        </h4>


        `;


    })


    .catch(error => {


        console.log(error);


        quoteData.innerHTML = 
        "Unable to load quote";


    });


});