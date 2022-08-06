const searchButton = document.querySelector ( '.btn') ;

const searchInput = document.querySelector ( '.search-input ') ;

const output = document.querySelector ( '.result') ;

searchButton.addEventListener ('click' , getCountry) ;

function getCountry() {

  let countryName = searchInput.value ;

    let url = `https://restcountries.com/v3.1/name/${countryName }?fullText=true` ;

    fetch (url).then ( (response)=> response.json())

               .then ( (data)=> {

 //console.log (data)
//console.log (data[0].capital[0])
//console.log (data[0].flags.svg)
//console.log (data[0].continents[0])
//console.log (data[0].name.common)
//console.log (data[0].population)
//console.log (Object.keys(data[0].currencies)[0])
//console.log (data[0].currencies[Object.keys(data[0].currencies)].name)
//console.log (Object.values(data[0].languages).toString().split(" , ").join(" , "))

       output.innerHTML = `  <div class="container">

        <div class="card">
    
        <img src=" ${data[0].flags.svg} " alt="" class="centre  card"> 

       <h2 class="text-c">${data[0].name.common}</h2>
    
       <div class="flex my">
       <h4>Capital :</h4>
       <p>${data[0].capital[0]}</p>
       </div>
    
      <div class="flex my">
      <h4>Population :</h4>
      <p>${data[0].population}</p>
      </div>
    
      <div class="flex my">
      <h4>currency :</h4>
      <p>${Object.keys(data[0].currencies)[0]}-${data[0].currencies[Object.keys(data[0].currencies)].name}</p>
      </div>
    
     <div class="flex my">
     <h4>Continent :</h4>
     <p>${data[0].continents[0]}</p>
     </div>
    
     <div class="flex my">
     <h4>Languages :</h4>
     <p>${Object.values(data[0].languages).toString().split(" , ").join(" , ")}</p>
     </div>
    
     </div>
    
    </div>

    `

     }).catch((error)=>{
      if (countryName.length == 0 ) {

          output.innerHTML = `<h3 class="text-c"> Input Field Cannot be empty !  </h3>`

      } else {

     output.innerHTML= `<h3 class="text-c">Invalid Country Name </h3>`

      }

     }) ;

} ;

