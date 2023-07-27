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
});