import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text> search </Text>
      </View>
      <View style={styles.list}>
        <Text> list </Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight || 0 },
  search: { padding: 10, backgroundColor: "green" },
  list: { flex: 1, padding: 10, backgroundColor: "blue" },
});
