export async function fetchWeather(city) {
    const key = "30037bdab5913b9b14cef95b90517c1c";
    const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`;
    
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error("City not found");
    }
    return response.json();
}