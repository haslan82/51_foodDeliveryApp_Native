import { StyleSheet } from "react-native";
import "./global.css";
import Router from "./src/navigation/Router";
import { Provider } from "react-redux";
import store from "./store";


export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
