import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from "native-base";
import { StyleSheet, Text, View } from 'react-native';
import Container from './container';

export default function App() {
  return (
    <NativeBaseProvider>
          <Container />

      </NativeBaseProvider>
  );
}

