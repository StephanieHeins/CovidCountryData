// API Key
const APIKey = "7da14da879msh47cc8472a21896cp170670jsn11ea31ce2335"

// Global Variables
var countryName = document.querySelector('#countryName');
var confirmed = document.querySelector('#confirmed');
var critical = document.querySelector('#critical');
var deaths = document.querySelector('#deaths');
var recovered = document.querySelector('#recovered');

// Search CC function 

function ccSearch(event) {
    let userInput=$("#searchInput").val().trim();
    var Query = 'https://covid-19-data.p.rapidapi.com/country/code?code=' + userInput + '&apikey=7da14da879msh47cc8472a21896cp170670jsn11ea31ce2335'
    fetch(Query, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "7da14da879msh47cc8472a21896cp170670jsn11ea31ce2335"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        countryName.innerHTML = data[0].country;
        confirmed.innerHTML = data[0].confirmed;
        critical.innerHTML = data[0].critical;
        deaths.innerHTML = data[0].deaths;
        recovered.innerHTML = data[0].recovered;
    })
    .catch(err => {
        console.error(err);
    });
}


// Onclick handlers
$("#searchBtn").click(ccSearch);