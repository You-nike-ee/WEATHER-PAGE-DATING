function handleSearch(event){
    event.preventDefault();
    let searchInput = document.querySelector("#searchedCity");
    let searchCity = document.querySelector("#currentCity");
    searchCity.innerHTML = searchInput.value;
    }
    let formsy = document.querySelector("#searchForm")
    formsy.addEventListener("submit", handleSearch);
    
    let theDate = document.querySelector("#currentDate")
    let currentTime = new Date();
    let minutes = currentTime.getMinutes()
    let hours = currentTime.getHours()
    let day = currentTime.getDay()
    
    if (minutes < 10){
      minutes = `0${minutes}`
    }
    if (hours < 10){
      hours = `0${hours}`
    }
  
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let formattedDay = days[day]
    theDate.innerHTML = `${formattedDay}, ${hours}:${minutes}`