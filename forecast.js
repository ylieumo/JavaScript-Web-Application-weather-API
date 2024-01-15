const key = '4y44qvuGPevNYNhLt71rxfudCGA80mhc';

// get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';

    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);

    const data = await(response.json());

    // console.log(data);

    return data[0];
}



// get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch (base + query);

    const data = await response.json();

    // console.log(data);


    return data[0];



};

// getCity('melrose')
// .then(data => console.log(data))
// .catch(err => console.log(err));


// getCity('melrose').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));


// getWeather("338630");
