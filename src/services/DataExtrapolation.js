export function GetAverages(data) {
  const dailyData = {};

  data.forEach(item => {
      const date = item.dt_txt.split(" ")[0];

      if (!dailyData[date]) {
        dailyData[date] = { temps: [], windSpeeds: [], icons: {} };
      }

      dailyData[date].temps.push(item.main.temp_min);
      dailyData[date].temps.push(item.main.temp_max);
      dailyData[date].windSpeeds.push(item.wind.speed);

      // väder ikon från klockan 12
      const hour = item.dt_txt.split(" ")[1].split(":")[0];
        if (hour=="15") {
          dailyData[date].ico = item.weather[0].icon;
        }
    });

    // mappa daily temp_min och temp_max till date
const newData = Object.keys(dailyData).map(date => {
  const { temps, windSpeeds, ico } = dailyData[date];
  const maxTemp = Math.max(...temps);
  const minTemp = Math.min(...temps);
  const avgWindSpeed = windSpeeds.reduce((sum, w) => sum + w, 0) / windSpeeds.length;

  return {
    Date: date,
    MaxTemp: Math.round(maxTemp),
    MinTemp: Math.round(minTemp),
    WindSpeed: Math.round(avgWindSpeed),
    Icon: ico,
  };
});

return newData;
}
























/*
export function GetAverages(data) {
    const dailyData = {};

    console.log(data);

    const acceptedDates = [];

    data.forEach((item, index) => {
        const date = item.dt_txt.split(" ")[0];

        // ta bort sista dagen
        const hour = item.dt_txt.split(" ")[1].split(":")[0];
        if (hour == "12" && !acceptedDates.includes(date)) {
          acceptedDates.push(date);
        }

        if (!dailyData[date]) {
          dailyData[date] = { temps: [], windSpeeds: [], icons: {} };
        }
        dailyData[date].temps.push(item.main.temp);
        dailyData[date].windSpeeds.push(item.wind.speed);
      
        // räkna ikon count
        const icon = item.weather[0].icon;
        dailyData[date].icons[icon] = (dailyData[date].icons[icon] || 0) + 1;
      });

      

      // mappa averages till date som "parent" (titta app.jsx)
  const newData = Object.keys(dailyData).map(date => {
    const { temps, windSpeeds, icons } = dailyData[date];
    const avgTemp = temps.reduce((sum, t) => sum + t, 0) / temps.length;
    const avgWindSpeed =windSpeeds.reduce((sum, w) => sum + w, 0) / windSpeeds.length;
    const prevalentIcon = Object.keys(icons).reduce((a, b) => icons[a] > icons[b] ? a : b);

    return {
      Date: date,
      Temp: Math.round(avgTemp),
      WindSpeed: Math.round(avgWindSpeed),
      Icon: prevalentIcon,
    };
  });

  return newData;
}
*/