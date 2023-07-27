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
      <View
        style={{
          position: "absolute",
          paddingVertical: 20,
          paddingHorizontal: 10,
          left: 120,
        }}
      >
        <View style={{ marginTop: 50 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../assets/images/cloud.png")}
              style={{ height: 100, width: 100, tintColor: "white" }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 40 }}>
              {data?.name || "Loading..."}
            </Text>
            <Text style={{ color: "white", fontSize: 64 }}>
              {data
                ? `${(data["main"]["temp"] - 273).toFixed(0)}° C`
                : "Loading..."}
            </Text>
            <Text style={{ fontSize: 22, color: "white", textAlign: "center" }}>
              {data ? data["weather"][0]["main"] : "Loading..."}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 210 }}>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              marginTop: 100,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            7 Days Forecast
          </Text>
        </View>
        <View style={styles.forecastContainer}>{renderForecast()}</View>
      </View>
      <View style={styles.weatherDetails}>
        <Text style={{ fontSize: 14, color: "white", alignSelf: "center" }}>
          Wheather Details
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: 14, color: "white" }}>Wind:</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Pressure:</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Humidity:</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Visibility:</Text>
          </View>
          <View>
            <Text style={{ fontSize: 14, color: "white" }}>
              {data ? data["wind"]["speed"] : "Loading.."}
            </Text>
            <Text style={{ fontSize: 14, color: "white" }}>
              {data ? data["main"]["pressure"] : "Loading.."}
            </Text>
            <Text style={{ fontSize: 14, color: "white" }}>
              {data ? `${data["main"]["humidity"]}%` : "Loading.."}
            </Text>
            <Text style={{ fontSize: 14, color: "white" }}>
              {data ? data["visibility"] : "Loading.."}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}