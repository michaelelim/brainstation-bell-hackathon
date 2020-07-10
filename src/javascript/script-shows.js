const api_key = "e09daf41-aaa1-4c9d-9b7c-c4604ad16740";
const usersURL = "https://project-1-api.herokuapp.com/";

makeShows = () => {
  let container = document.querySelector(".shows-shows");

  let newShowTitle = document.createElement('h2');
  newShowTitle.classList.add("shows-shows__title");
  container.appendChild(newShowTitle);
  document.querySelector(".shows-shows__title").innerHTML = "Shows";
  
  let bigScreenContainer = document.createElement('div');
  bigScreenContainer.classList.add("shows-shows__big-screen-titles-container");
  container.appendChild(bigScreenContainer);
  
  let bigScreenArr = ["DATES", "VENUE", "LOCATION", "BUY TICKETS"];
  

  bigScreenArr.forEach((item, i) => {
    container = document.querySelector(".shows-shows__big-screen-titles-container");
    let bigScreenTitles = document.createElement('h5');
    bigScreenTitles.classList.add("shows-shows__big-screen-titles");
    container.appendChild(bigScreenTitles);
    document.querySelectorAll(".shows-shows__big-screen-titles")[i].innerHTML = item;
  })
  
  showArr.forEach((item, i) => {
    container = document.querySelector(".shows-shows");
    let newDateTitle = document.createElement('div');
    newDateTitle.classList.add("shows-shows__sub-title");
    container.appendChild(newDateTitle);
    document.querySelectorAll(".shows-shows__sub-title")[i].innerHTML = "DATE";
  
    let newDate = document.createElement('div');
    newDate.classList.add("shows-shows__date");
    container.appendChild(newDate);
    document.querySelectorAll(".shows-shows__date")[i].innerHTML = item.date;
  
    newDateTitle = document.createElement('div');
    newDateTitle.classList.add("shows-shows__sub-title--venue");
    container.appendChild(newDateTitle);
    document.querySelectorAll(".shows-shows__sub-title--venue")[i].innerHTML = "VENUE";
  
    let newVenue = document.createElement('div');
    newVenue.classList.add("shows-shows__venue");
    container.appendChild(newVenue);

    document.querySelectorAll(".shows-shows__venue")[i].innerHTML = item.place;
  
    newDateTitle = document.createElement('div');
    newDateTitle.classList.add("shows-shows__sub-title--loc");
    container.appendChild(newDateTitle);
    document.querySelectorAll(".shows-shows__sub-title--loc")[i].innerHTML = "LOCATION";
  
    let newLoc = document.createElement('div');
    newLoc.classList.add("shows-shows__location");
    container.appendChild(newLoc);
    document.querySelectorAll(".shows-shows__location")[i].innerHTML = item.location;
  
    let newButton = document.createElement('button');
    newButton.classList.add("shows-shows__button");
    container.appendChild(newButton);
    document.querySelectorAll(".shows-shows__button")[i].innerHTML = "BUY TICKETS";
  
    let newDividerLine = document.createElement('div');
    newDividerLine.classList.add("shows-shows__divider-line");
    container.appendChild(newDividerLine);
  })
} 

let showArr = [];

getShows = () => {
  axios
    .get(usersURL + "showdates?api_key=" + api_key)
    .then(res => {showArr = res.data;})
    .then(() => {makeShows()})
    .catch(err => console.log(err))
}
getShows();