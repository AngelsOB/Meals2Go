import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text> search </Text>
      </View>
      <View style={styles.list}>
        <Text> list </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  search: { padding: 10, backgroundColor: "green" },
  list: { flex: 1, padding: 10, backgroundColor: "blue" },
});
