import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from "native-base";
import Home from "./component/home";
import Login from "./component/login";
import Register from "./component/register";
import MainPage from './component/mainPage'

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <MainPage/>
      </Box>
    </NativeBaseProvider>
  );
}