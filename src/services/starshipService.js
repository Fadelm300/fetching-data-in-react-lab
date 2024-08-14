
// const API_KEY = '20daa16dc9c44874aee95126240708';
// const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const API_KEY = 'https://swapi.dev/api/starships/';

const showStarships = async () => {
    try {
        const res = await fetch(API_KEY);
        const data = await res.json();
        console.log('Starships:', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { showStarships };

