



const API_KEY = 'https://swapi.dev/api/starships';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const showStarships = async () => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        console.log('Starships:', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};


export { showStarships };
