import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { API_KEY } from "./Constants";
import { styles } from "./styles";

export default function Home() {
  const [data, setData] = useState();
  const [foreCast, setForeCast] = useState();

  useEffect(() => {
    fetchData("weather", setData);
    fetchData("forecast", setForeCast);
  }, []);

  const fetchData = (type, setDataFunction) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/${type}?q=${"Indore"}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setDataFunction(res))
      .catch((err) => console.log(err));
  };

  const renderForecast = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (!foreCast || !foreCast.list || foreCast.list.length === 0) {
      return null;
    }

    return days.map((day, index) => (
      <View key={index} style={{}}>
        <Text style={styles.dayText}>{day.slice(0, 3)}</Text>
        <Text style={styles.dayText}>
          {foreCast?.list[index]?.main?.humidity} %
        </Text>
        <Text style={styles.dayText}>
          {foreCast?.list[index]?.weather[0]?.main}
        </Text>
        <Text style={styles.dayText}>
          {(foreCast?.list[index]?.main?.temp_min - 273).toFixed(0)} ° C
        </Text>
        <Text style={styles.dayText}>
          {(foreCast?.list[index]?.main?.temp - 273).toFixed(0)} ° C
        </Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.imageStyle}>
            <Image
              source={require("../assets/images/cloud.png")}
              style={styles.cloudImage}
            />
          </View>
          <View style={styles.nameStyle}>
            <Text style={styles.nameTextStyle}>
              {data?.name || "Loading..."}
            </Text>
            <Text style={styles.tempStyle}>
              {data
                ? `${(data["main"]["temp"] - 273).toFixed(0)}° C`
                : "Loading..."}
            </Text>
            <Text style={styles.wetherStyle}>
              {data ? data["weather"][0]["main"] : "Loading..."}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 210 }}>
        <View>
          <Text style={styles.headingStyle}>7 Days Forecast</Text>
        </View>
        <View style={styles.forecastContainer}>{renderForecast()}</View>
      </View>
      <View style={styles.weatherDetails}>
        <Text style={styles.wetherHeader}>Wheather Details</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.textView}>Wind:</Text>
            <Text style={styles.textView}>Pressure:</Text>
            <Text style={styles.textView}>Humidity:</Text>
            <Text style={styles.textView}>Visibility:</Text>
          </View>
          <View>
            <Text style={styles.lowerText}>
              {data ? data["wind"]["speed"] : "Loading.."}
            </Text>
            <Text style={styles.lowerText}>
              {data ? data["main"]["pressure"] : "Loading.."}
            </Text>
            <Text style={styles.lowerText}>
              {data ? `${data["main"]["humidity"]}%` : "Loading.."}
            </Text>
            <Text style={styles.lowerText}>
              {data ? data["visibility"] : "Loading.."}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
