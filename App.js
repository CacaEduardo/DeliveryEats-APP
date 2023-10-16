import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Colors from './src/configs/Colors';
import { Dashboard } from './src/components/screens/Dashboard';

export default function App() {
  return (
    <>
      <Dashboard />
    </>
  );
}

