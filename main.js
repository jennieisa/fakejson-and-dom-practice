const cities = [
     {
       city: "London",
       code: "UK",
       population: 11504632,
       foodRanking: 4
     },
     {
       city: "Manchester",
       code: "UK",
       population: 4280424,
       foodRanking: 5
     },
     {
       city: "Paris",
       code: "FR",
       population: 10830024,
       foodRanking: 9
     },
     {
       city: "Nice",
       code: "FR",
       population: 4250024,
       foodRanking: 10
     },
     {
       city: "Berlin",
       code: "DE",
       population: 8250024,
       foodRanking: 8
     },
     {
       city: "Munich",
       code: "DE",
       population: 5250050,
       foodRanking: 6
     }
   ];

cities.forEach((elem) => { //forEach loop med funktion 
     let listAllCities = document.querySelector("#allCities"); //hämtar ul-tagg
     let cityTag = document.createElement("li"); //Skapar li-tagg
     cityTag.innerText = elem.city; //Sätter li-taggs innertext till namnet på stad
     listAllCities.appendChild(cityTag); //Lägger in cityTag som barn till ul-tagg

     if (elem.code == "FR") { //Om elementets landskod är FR ska nedan göras 
          cityTag.style.color = "blue"; //Färgar li-tagg blå
     }else if (elem.code == "UK") { //Om elementets landskod är UK ska nedan göras
          cityTag.style.color = "red"; //Färgar li-tagg röd
     }
});

let bestFoodList = cities.filter((elem) => elem.foodRanking >= 8); //Filtrerar bort städer med foodrankning lägre än 8

bestFoodList.sort((elem1, elem2) => { //Sorterar sedan listan efter filtreringen. Sorterar så att det största kommer först och det minsta sist. 
     return elem2.foodRanking - elem1.foodRanking; //Returnerar i listan det som är störst respektive mindre 
});

bestFoodList.forEach((elem) => { //ForEach loop med funktion
   let listCitiesWGoodFood = document.querySelector("#citiesForFoodies"); //Hämtar ol-tagg
   let cityTag = document.createElement("li"); //Skapar li-tagg
   cityTag.innerText = elem.city + ": " + elem.foodRanking; //Sätter li-taggens innertext till namnet på staden och foodrank
   listCitiesWGoodFood.appendChild(cityTag); //Lägger in li-taggen som barn till ol-taggen
}); 

let sortedCitiesByPop = cities.sort((elem1, elem2) => {
    return elem2.population - elem1.population;
});

sortedCitiesByPop.forEach((elem) => {
     let oListCities = document.querySelector("#sortedByPopulation");
     let listTagSortByPopulation = document.createElement("li");
     listTagSortByPopulation.innerHTML = `${elem.city} <strong>befolkning: ${elem.population}</strong>`;
     oListCities.appendChild(listTagSortByPopulation);
});

/* Exempel lösning
1a & 1b.
cities.forEach((elem) => {
     let cityItem = document.createElement("li");
     cityItem.innerText = elem.city;
     if (elem.code == "FR") {
          cityItem.style.color = "blue";
     }else if (elem.code == "UK") {
          cityItem.style.color = "red";
     }else {
          cityItem.style.color = "black"; //! Man ska alltid ha en else fast man kanske inte vill ha den. Detta då man har if else if osv. 
     }
     document.querySelector("#allCities").appendChild(cityItem); 
});

ALTERNATIV MED SWITCH: 
cities.forEach((elem) => {
     let cityItem = document.createElement("li"); 
     cityItem.innerText = elem.city;
     
     switch(elem.code) {
          case "FR": 
               cityItem.style.color = "blue";
               break;

          case "UK": 
               cityItem.style.color = "red";
               break;

          default: 
                break;
     }
})
//* Man måste ha break i annars kommer alla prövas i alla och på default så kan ju alla hamna och det stämmer på alla. Så alla kommer att vara samma (det som default är) i slutet. Break hoppar alltså ut ur switchen när caset uppfylls. Switch i sig loopar inte igenom något utan den kollar bara en grej. Därför har vi den inuti vår forEach loop. 

2a & 2b
let goodFoodCities = cities.filter(city => city.foodRankning >= 8);
//*Om vi ska ha flera parametrar eller mer logik så behöver vi paranteser runt parametrarna, måsvingar och return. När det är så enkelt och lite vi vill kolla så kan vi förenkla det på det här sättet.

goodFoodCities.forEach((elem) => {
     let foodCity = document.createElement("li");
     foodCity.innerHTML = elem.city + "- " + elem.foodRanking + "/10";
     document.querySelector("#citiesForFoodies").appendChild(foodCity);
})

goodFoodCities.sort((obj, prevObj) => {
     return prevObj.foodRanking - obj.foodRanking;
});
//* Sort funktionen är lite speciell. Vi vet nu att vi har tre städer och vill ranka dem efter deras food-rating. Sort muterar original arrayen. Sort tar emot två (brukar man köra) argument. Den jämför item (vilket är det andra elementet i arrayen) med prevItem. Blir det då ett negativt tal så vet vi att item är mindre än prevItem. 

3. 
let citiesByPopulation = cities;
citiesByPopulation.sort((a, b) => {
     return b.poplation-a.population;
});

citiesByPopulation.forEach((city) => {
     let cityItem = document.createElement("li");
     cityItem.innerHTML = `${city.city} <strong>befolkning: ${city.population</strong>`;
     document.qerySelector("#sortedByPopulation").appendChild(cityItem);
});

//*Vår cities array kommer inte ändras då vi gör detta på en kopia kan man säga (se variabel ovan). 


*/



















