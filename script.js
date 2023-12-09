const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7dd6587c98msha41a6d823203507p15d5f6jsnf320a9a3c959',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let getwether = async (city) => {
	cityname.innerHTML = city
	let res = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then((response) => {
			console.log(response)
			// cloud_pct = response.cloud_pct
			temp.innerHTML = response.data.temp
			temp2.innerHTML = response.data.temp
			feels_like.innerHTML = response.data.feels_like
			humidity.innerHTML = response.data.humidity
			humidity2.innerHTML = response.data.humidity
			min_temp.innerHTML = response.data.min_temp
			max_temp.innerHTML = response.data.max_temp
			wind_speed.innerHTML = response.data.wind_speed
			wind_speed2.innerHTML = response.data.wind_speed
			wind_degrees.innerHTML = response.data.wind_degrees
			sunrise.innerHTML = response.data.sunrise
			sunset.innerHTML = response.data.sunset


		})
		.catch(err => console.error(err));
	// console.log(res);
}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	let val = document.querySelector("#city").value;
	getwether(val)
})
getwether("delhi");


let getwether2 = async (city) => {
	let res = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then((response) => {
			console.log(response)
			cell11.innerHTML = response.data.cloud_pct
			cell12.innerHTML = response.data.temp
			cell13.innerHTML = response.data.feels_like
			cell14.innerHTML = response.data.humidity
			cell15.innerHTML = response.data.min_temp
			cell16.innerHTML = response.data.max_temp
			cell17.innerHTML = response.data.wind_speed
			cell18.innerHTML = response.data.wind_degrees
			cell19.innerHTML = response.data.sunrise
			cell110.innerHTML = response.data.sunset


		})
		.catch(err => console.error(err));
	// console.log(res);
}
getwether2("Shanghai");

let getwether3 = async (city) => {
	let res = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then((response) => {
			console.log(response)
			cell21.innerHTML = response.data.cloud_pct
			cell22.innerHTML = response.data.temp
			cell23.innerHTML = response.data.feels_like
			cell24.innerHTML = response.data.humidity
			cell25.innerHTML = response.data.min_temp
			cell26.innerHTML = response.data.max_temp
			cell27.innerHTML = response.data.wind_speed
			cell28.innerHTML = response.data.wind_degrees
			cell29.innerHTML = response.data.sunrise
			cell210.innerHTML = response.data.sunset


		})
		.catch(err => console.error(err));
	// console.log(res);
}
getwether3("Boston");

let getwether4 = async (city) => {
	let res = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then((response) => {
			console.log(response)
			cell31.innerHTML = response.data.cloud_pct
			cell32.innerHTML = response.data.temp
			cell33.innerHTML = response.data.feels_like
			cell34.innerHTML = response.data.humidity
			cell35.innerHTML = response.data.min_temp
			cell36.innerHTML = response.data.max_temp
			cell37.innerHTML = response.data.wind_speed
			cell38.innerHTML = response.data.wind_degrees
			cell39.innerHTML = response.data.sunrise
			cell310.innerHTML = response.data.sunset


		})
		.catch(err => console.error(err));
	// console.log(res);
}
getwether4("Allahabad");

let getwether5 = async (city) => {
	let res = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then((response) => {
			console.log(response)
			cell41.innerHTML = response.data.cloud_pct
			cell42.innerHTML = response.data.temp
			cell43.innerHTML = response.data.feels_like
			cell44.innerHTML = response.data.humidity
			cell45.innerHTML = response.data.min_temp
			cell46.innerHTML = response.data.max_temp
			cell47.innerHTML = response.data.wind_speed
			cell48.innerHTML = response.data.wind_degrees
			cell49.innerHTML = response.data.sunrise
			cell410.innerHTML = response.data.sunset


		})
		.catch(err => console.error(err));
	// console.log(res);
}
getwether5("Tirupati");

