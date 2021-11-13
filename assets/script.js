fetch("https://covid-19-data.p.rapidapi.com/country/code?code=us&apikey=7da14da879msh47cc8472a21896cp170670jsn11ea31ce2335", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "7da14da879msh47cc8472a21896cp170670jsn11ea31ce2335"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});