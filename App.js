import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import Router from "./src/navigation/Router";



export default function App() {
  return (
  <Router/>

)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
