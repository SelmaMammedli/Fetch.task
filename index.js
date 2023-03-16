let body = document.querySelector("body");
let header = document.querySelector("header");
let div = document.querySelector("div");
let button = document.createElement("button");
button.textContent = "Dark Mode";
body.append(button)
header.append(button)
button.addEventListener("click", function(){
    var element = document.body;
   element.classList.toggle("dark-mode");
   button.classList.add("d-flex");
let icon= document.createElement("i");
icon.classList.add("fa-solid fa-moon");
})
let row = document.querySelector(".row");
API_URL = 'https://restcountries.com/v3.1/all'
let card =document.querySelector(".card");
 fetch(API_URL)
 .then((response)=> response.json())
 .then((data)=>{ 
    for (let i = 0; i< data.length; i++) {
        row.innerHTML +=` <div class="col-3">
        <div class="card" style="width: 18rem; color: darkgray;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${data[i].countryname}</h5>
              <ul>
                <li><b>Population:${data[i].populationname}</b></li>
                <li><b>Region:${data[i].regionname}</b></li>
                <li><b>Capital:${data[i].capitalname}</b></li>
              </ul>
              <a href="#" ></a>
            </div>
          </div>
        </div>`
        
    }






 })


