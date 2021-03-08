import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./navigation/MainNavigator";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { Store } from "./components/Redux/Store";

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#EA514C",
      accent: "white",
    },
  };

  return (
    <Provider store={Store}>
      <PaperProvider theme={theme}>
        <MainNavigator />
      </PaperProvider>
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
