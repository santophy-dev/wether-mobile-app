import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6F7378",
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  weatherDetails: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 20,
    paddingBottom: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  forecastContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  dayText: {
    paddingVertical: 8,
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
  innerContainer: {
    marginTop: 50,
  },
  imageStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  cloudImage: {
    height: 100,
    width: 100,
    tintColor: "white",
  },
  nameStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  nameTextStyle: {
    color: "white",
    fontSize: 40,
  },
  tempStyle: {
    color: "white",
    fontSize: 64,
  },
  wetherStyle: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  mainContainer: {
    position: "absolute",
    paddingVertical: 20,
    paddingHorizontal: 10,
    left: 120,
  },
  headingStyle: {
    color: "white",
    fontSize: 25,
    marginTop: 100,
    marginBottom: 20,
    textAlign: "center",
  },
  wetherHeader: {
    fontSize: 14,
    color: "white",
    alignSelf: "center",
  },
  textView: {
    fontSize: 14,
    color: "white",
  },
  lowerText: {
    fontSize: 14,
    color: "white",
  },
});
