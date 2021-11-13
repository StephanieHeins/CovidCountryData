// API Key
const APIKey = "7da14da879msh47cc8472a21896cp170670jsn11ea31ce2335"

// Global Variables


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
    .then((responseJson) => {
        console.log(responseJson);
    })
    .catch(err => {
        console.error(err);
    });
}


// Onclick handlers
$("#searchBtn").click(ccSearch);